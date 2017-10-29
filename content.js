
// Set up listener for plugin icon.
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {
      chrome.runtime.sendMessage({"message": "open_new_tab", "url": firstHref});
    }
  }
);



/*
var div=document.createElement("div"); 
document.body.appendChild(div); 
div.innerText="unBIASED";
div.setAttribute("id", "bkg");
div.style.position = 'fixed';
div.style.top = '50%';
div.style.left = '50%';
div.style.width = '100%';
div.style.backgroundColor = 'blue';
*/
function myFunction() {
    alert("The form was submitted");
    return false;
}

function populateWebsites(query)
{
	var req = new XMLHttpRequest();
	req.open("GET", "http://localhost:3000/allsides/" + query, false)
	req.send(null)
	console.log(req.responseText)
	websites = JSON.parse(req.responseText)

	for (var i = 0; i < websites.length; i++) {
		document.getElementById("bkg").innerHTML += '<a href='+ websites[i]["url"] +'>'+ websites[i]["title"] +'</a>'
	}
}

function _clickHandler() { //when search submit is clicked
    if (document.getElementById('box').value.length < 1) {
        return false;
    } else { 
        populateWebsites(document.getElementById('box').value)
    }
}
/*

document.addEventListener("DOMContentLoaded", function () {
	console.log("hi")
    chrome.tabs.getSelected(null, function(tab) {
        //send tab.url to get analized
        document.getElementById('myURL').innerHTML = tab.url;
    });

    document.getElementById("submit").onclick = _clickHandler;
});
*/

let htmlDiv = `
<div id="bkg" style="position:fixed; top:100px;bottom:auto; right:0px;background-color:rgba(60, 60, 60, 0.7);padding:15px;margin:25px;font-family:Lato !important;font-size:24px">  
  <h3> <center> unBIASED </center> </h3> 
  <form onsubmit="return false">
    <input id="box" type="text" name="searchterm" style ="!important;" placeholder="Search Term"><br>
    <button id="submit" type="button" style="width:100%;margin-top:10px;">Search</button>
  </form>
  </div>
`
$("body").append(htmlDiv);




if (document.readyState === 'loading'){
	document.addEventListener("DOMContentLoaded",afterDOMLoaded);
} else {
	afterDOMLoaded();
}
function afterDOMLoaded(){
    document.getElementById("submit").onclick = _clickHandler;
}
//let t2='<div id="pop_bg" style="height: 100%; width: 100%;"></div><div id="mgt_popup"><span class="popup_close"></span><div><img id="logo" src="'+link3+'"/></div><div id="pop_inner"><label id="user"></label><input type="button" id="mailgett" value="Go To MailGet"/></div></div>'

//$("header").append(htmlForm);
/*
var form1=document.createElement("form"); 
document.div.appendChild(form1);
var input1=document.createElement("input"); 
document.form1.appendChild(input1);
input1.setAttribute("type", "submit");
input1.setAttribute("id", "startsearch");
input1.setAttribute("value", "Search");
*/
