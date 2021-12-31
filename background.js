function openTab (url) {
  chrome.tabs.create({'url': chrome.extension.getURL('index.html') + '?url=' + url});
}

chrome.browserAction.onClicked.addListener(function (tab) {
  chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
    var currentUrl = tabs[0].url;
    openTab(currentUrl);
  });
});