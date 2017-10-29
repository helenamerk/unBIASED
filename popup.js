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
        mystr = tab.url;
        mystr = mystr.replace("http://", "");
        mystr = mystr.replace("https://", "");
        req.open("GET", "http://54.167.41.138:8080/url/" + mystr, false)
        req.send(null)
        console.log(req.responseText)
        
        document.getElementById('myURL').innerHTML = "Page Bias: "+req.responseText;
    });

    document.getElementById("submit").onclick = _clickHandler;
});
