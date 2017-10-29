/*
function httpGet(theUrl)
{
    if (window.XMLHttpRequest)
    {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp=new XMLHttpRequest();
    }
    else
    {// code for IE6, IE5
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange=function()
    {
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
            return xmlhttp.responseText;
        }
    }
    xmlhttp.open("GET", theUrl, false );
    xmlhttp.send();    
}
*/


//keywords = document.getElementById('textField').innerHTML;

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
        document.getElementById('myURL').innerHTML = tab.url;
    });

    document.getElementById("submit").onclick = _clickHandler;
});

/*
var x = document.createElement("DL");
x.setAttribute("id", "myDL");
document.body.appendChild(x);
var y = document.createElement("DT");
var txt1 = document.createTextNode("Coffee");
y.appendChild(txt1);
y.setAttribute("id", "myDT");
document.getElementById("myDL").appendChild(y);

function myFunction(name) {
  var z = document.createElement("DD");
  var txt2 = document.createTextNode(name);
  z.appendChild(txt2);
  y.setAttribute("id", "myDT");
  document.getElementById("myDL").appendChild(z);
}
myFunction("hi");
myFunction("hi2");
*/

//$.get("serverweb.com/analyze", { url:myURL});
//$.get("serverweb.com/getnews", { keywords:tab.url});


/*
curl -X GET 
--header 'Accept: application/json' 
--header 'Content-Language: en' 
--header 'Accept-Language: en' 
'https://watson-api-explorer.mybluemix.net/tone-analyzer/api/v3/tone?text=These%20are%20poems%20about%20sadness%20in%20all%20its%20varied%20forms.%20There%20is%20much%20sadness%20in%20the%20world%20and%20many%20reasons%20to%20be%20sad.%20Sadness%20is%20a%20difficult%20feeling%20to%20cope%20with.%20Often%2C%20it%20is%20caused%20by%20traumatic%20events%20or%20depression.%20The%20melancholy%20caused%20by%20deep%20sadness%20might%20begin%20to%20interfere%20with%20your%20day%20to%20day%20life%2C%20leaving%20you%20feeling%20unmotivated%20and%20even%20worthless.%20Expressing%20such%20feelings%20in%20writing%2C%20especially%20through%20poems%20will%20not%20only%20help%20you%20to%20cope%2C%20it%20can%20actually%20help%20you%20to%20heal%20emotionally.%20Sit%20down%2C%20find%20a%20pencil%20and%20paper%2C%20and%20pour%20your%20heart%20out%20onto%20the%20page.%20You%20are%20likely%20to%20find%20that%20the%20result%20is%20a%20feeling%20of%20calmness%20and%20relief&version=2017-09-21&sentences=false&tones=emotion%2Clanguage%2Csocial'

*/

/*
$(document).ready(function() {
  $('.biased').click(function() {
    chrome.runtime.sendMessage({ undo: true })
  })
})
*/