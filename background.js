// background.js
// can run chrome.STUFF


// Called when the user clicks on the browser action.

chrome.browserAction.onClicked.addListener(function(tab) {
  // Send a message to the active tab
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action"});
  });
});

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "open_new_tab" ) { //send URL to api!
    	//chrome.tabs.insertCSS(null, {file: "styles.css"});
      	chrome.tabs.create({"url": request.url});

        chrome.tabs.executeScript({
          code: 'var div=document.createElement("div"); document.body.appendChild(div); div.innerText="test1234567";'
        });
    }
    
  }
);

// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript({
    code: 'var div=document.createElement("div"); document.body.appendChild(div); div.innerText="test1234567";'
  });
});