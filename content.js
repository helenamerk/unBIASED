
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
function populateWebsites(searchTerm)
{
  console.log(searchTerm)
}

function _clickHandler() { //when search submit is clicked
    console.log("In Success Handler..");
    if (document.getElementById('box').value.length < 1) {
        return false;
    } else {
        console.log("In Success Handler..");
        console.log(document.getElementById('box').value)
        //Do Your AJAX Request Call here

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
let htmlDiv = `<div id="bkg" style="color: #FFFFFF;border: 1px solid black; background-color: #000099; float:top">  
  <form onsubmit="return false">
    POV Search: <input id="box" type="text" name="searchterm"><br>
    <button id="submit" type="button">Search</button>
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
	console.log("hi")
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
console.log("hellllllo");