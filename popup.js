document.addEventListener('DOMContentLoaded', function() {
    const scrapeButton = document.getElementById('scrapeButton');
    const resultDiv = document.getElementById('result');
  
    scrapeButton.addEventListener('click', function() {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {action: "scrape"}, function(response) {
          resultDiv.value = response;
        });
      });
    });
  });
