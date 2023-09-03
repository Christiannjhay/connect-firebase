// popup.js
document.addEventListener("DOMContentLoaded", function () {
    const iframe = document.getElementById("iframe");
    const initButton = document.getElementById("init");
  
    initButton.addEventListener("click", function () {
      iframe.contentWindow.postMessage("init", "*");
    });
  
    // Listen for messages from the iframe
    window.addEventListener("message", function (event) {
      if (event.origin === "chrome-extension://opkcppplfjmppgmdodaalhmhjleieojj") {
        // Handle messages from the iframe here
        if (event.data === "iframe_ready") {
          console.log("The iframe is ready.");
        }
      }
    });
  });
  