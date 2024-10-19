chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === "scrape") {
      const html = document.documentElement.outerHTML;
      const css = Array.from(document.styleSheets)
        .map(sheet => {
          try {
            return Array.from(sheet.cssRules)
              .map(rule => rule.cssText)
              .join('\n');
          } catch (e) {
            console.log('Error accessing stylesheet:', e);
            return '';
          }
        })
        .join('\n');
  
      sendResponse(html + '\n\n/* CSS */\n\n' + css);
    }
  });
