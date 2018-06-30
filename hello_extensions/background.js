 setInterval(function() {
     alert("Hello! I am an alert box!!");
    // method to be executed;
     chrome.windows.create({'url': 'hello.html', 'type': 'popup'}, function(window) {
     });
 }, 5000);
