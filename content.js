
// Set up listener for plugin icon.
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {
      chrome.runtime.sendMessage({"message": "open_new_tab", "url": firstHref});
    }
  }
);



var div=document.createElement("div"); 
document.body.appendChild(div); 
div.innerText="unBIASED";
div.setAttribute("id", "bkg");

//let t2='<div id="pop_bg" style="height: 100%; width: 100%;"></div><div id="mgt_popup"><span class="popup_close"></span><div><img id="logo" src="'+link3+'"/></div><div id="pop_inner"><label id="user"></label><input type="button" id="mailgett" value="Go To MailGet"/></div></div>'

let htmlText = `<form>
    POV Search: <input id="box" type="text" name="searchterm"><br>
    <input id="submit" type="submit" value="Search">
  </form>
`
$("body").append(htmlText);
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