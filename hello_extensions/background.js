
setInterval(function() {

    // method to be executed;
     chrome.windows.create({'url': 'hello.html', 'type': 'popup'}, function(window) {
     });
 }, 5000);
