const express = require('express');
const request = require('request');
const cheerio = require('cheerio');
const querystring = require("querystring");

const app = express();

app.get('/url/:url', function(req, res) {
    var url = "http://" + querystring.escape(req.params.url);

    request({
        uri: url,
    }, function(error, response, body) {
        var $ = cheerio.load(body)

        site_title = $('title').text().toLowerCase();

        output = "no bias info found";
        request({
            uri: "https://www.allsides.com/bias/bias-ratings",
        }, function(error, response, body) {
            var $ = cheerio.load(body);
            table = $('table > tbody > tr > td > a');
        
            for(var i = 0; i < table.length - 1; i+=2) {
                outlet_str = table[i]["attribs"]["href"];
                bias_str = table[i+1]["attribs"]["href"];
    
                outlet = outlet_str.slice(13).split("-").join(" ").replace(' bias', '');

                if(site_title.includes(outlet)) {
                    output = bias_str.slice(12).split("-").join(" ");
                    break;
                }
            }

            res.send(output);
        })        
    })
})

app.get('/allsides/:query', function(req, res) {
    var query = req.params.query;
    var API_KEY = "8317b7ec4aff48269c4fe72bff5c05a0";
    request({
        uri: "https://www.allsides.com/bias/bias-ratings",

    }, function(error, response, body) {
        var $ = cheerio.load(body);
        table = $('table > tbody > tr > td > a');

        outlet_to_bias = {};

        for(var i = 0; i < table.length - 1; i+=2) {
            outlet_str = table[i]["attribs"]["href"];
            bias_str = table[i+1]["attribs"]["href"];

            outlet = outlet_str.slice(13).split("-").join(" ").replace(' bias', '');
            bias = bias_str.slice(12).split("-").join(" ");

            outlet_to_bias[outlet] = bias;
        }

        request({
            uri: "https://api.cognitive.microsoft.com/bing/v7.0/news/search?q=" + query + "&headlineCount=20",
            method: "GET",
            headers: {
                'Ocp-Apim-Subscription-Key': "49b4efad8e8249f783f37e262876276e",
            } 
        }, function(error, response, body) {
            news = JSON.parse(body);
            values = news["value"];

            output = [];
            for(var i = 0; i < values.length; i++) {
                outlet = values[i]["provider"][0]['name'].toLowerCase().replace('the ', '');
                title = values[i]["name"];
                url = values[i]["url"];

                if(outlet in outlet_to_bias) {
                    output.push({
                        "title": title,
                        "outlet": outlet,
                        "url": url,
                        "bias": outlet_to_bias[outlet]
                    })
                }
            }
            res.send(JSON.stringify(output));
        });
    });
});

app.listen(8080, function () {
    console.log('Listening on port 8080');
})
app.listen(8443, function () {
    console.log('Listening on port 8443');
})