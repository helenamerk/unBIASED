/*
var _ = require('underscore'),
    AYLIENTextAPI = require("aylien_textapi");

var textapi = new AYLIENTextAPI({
    application_id: "d2beb1b8",
    application_key: "e451c045a899c2ba722500722f8712f7"
});

function escapeRegExp(r) {
  return r.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
}

var titleWeight = 3,
    articleWeight = 1;

function keywordsfind(myurl){
    textapi.combined({
        url: myurl,
        endpoint: ['extract', 'concepts']
    }, function(err, result) {
      if (err === null) {
        var title;
        var article;
        var concepts;
        _(result.results).each(function(r) {
          if (r.endpoint == 'extract') {
            title = r.result.title;
            article = r.result.article;
          } else if (r.endpoint = 'concepts') {
            concepts = r.result.concepts;
          }
        });
        var cw = _.chain(concepts).map(function(o, c) {
          var w = _.chain(o.surfaceForms).map(function(sf) {
            var e = new RegExp('\\b' + escapeRegExp(sf.string) + '\\b', 'g');
            var inArticle = (article.match(e)  || []).length;
            var inTitle = (title.match(e) || []).length;
            return (inTitle * titleWeight) + (inArticle * articleWeight);
          }).reduce(function(memo, num) { return memo + num; }, 0).value();

          return {'concept': c, 'weight': w};
        }).sortBy(function(i) { return -i.weight; }).value();

        var numKeys = cw.length;

        if(numKeys > 6){
          numKeys = 6;
        }

        var top = [];

        for (i=0; i<numKeys; i++){
          var topicList = cw[i].concept;
          var splitText = topicList.split("/");
          var topicU = (splitText.slice(-1)).pop();
          var topic = topicU.replace(/_/g, " ");
          top.push();
          top[i] = topic;
        }
     
        return(top.join(", "));
      }
    });
}

*/
function populateWebsites(searchTerm)
{
  var z = document.createElement("h6");
  var txt2 = document.createTextNode(searchTerm);
  z.appendChild(txt2);
  document.getElementById("website_sources").appendChild(z);
}
function _clickHandler() { //when search submit is clicked
    if (document.getElementById('box').value.length < 1) {
        return false;
    } else {
        console.log("In Success Handler..");
        console.log(document.getElementById('box').value)
        //Do Your AJAX Request Call here

        populateWebsites(document.getElementById('box').value)


    }
}

document.addEventListener("DOMContentLoaded", function () {
    chrome.tabs.getSelected(null, function(tab) {
        //send tab.url to get analized
       
        //if find ( tab.url == biased arrray ) docmunet.createelement("p") .. 
        var req = new XMLHttpRequest();

        //document.getElementById("mykeywords").innerHTML(keywordsfind(tab.url));

        mystr = tab.url;
        mystr = mystr.replace("http://", "");
        mystr = mystr.replace("https://", "");
        mystr = mystr.slice(0,mystr.indexOf("/"));

        req.open("GET", "http://54.167.41.138:8080/url/" + mystr, false)
        req.send(null)
        console.log(req.responseText)
        
        document.getElementById('myURL').innerHTML = "Page Bias: "+req.responseText;
    });

    document.getElementById("submit").onclick = _clickHandler;
});
