##AdButler Extension for Debugging Tags

###What is this?
Based on the Chrome Extension built by 

###What does this package contain?

- The usual LICENSE.md and README.md files
- Sample icons in all suggested sizes: 19px and 38px due to [this](http://developer.chrome.com/extensions/browserAction.html#icon) followed by 16px for the favicon, 48px for the settings screen and 128px for the Chrome Web Store. Replace these icons with your own icons of the same size.
- Manifest.json file with some preconfigured sample values, mostly taken from [here](http://developer.chrome.com/extensions/manifest.html). Refer to linked page to add more needed values.
- autoincluded minified latest jQuery. Remove in manifest.json if not needed.
- [fancy-settings](https://github.com/zealotrunner/fancy-settings) with the default manifest. Remove the options_page key from the main manifest.json if your extension won't have any options
- background.html [background page](http://developer.chrome.com/extensions/background_pages.html) which includes the initial background script under scripts/background.js
- scripts/background.js which initializes the page action icon and does nothing else
- scripts/main.js [content script](http://developer.chrome.com/extensions/content_scripts.html) which is run at document_idle (edit in manuscript if needed) and displays a greeting message in the console.
- fragments/popup.html is an html popup file that opens when the page action is clicked (the extension icon in the address bar). You can edit it, or remove it completely. Please note that chrome.pageAction.onClicked will not fire if there is a popup defined - to make pageAction react to clicks, remove the popup, or add actions to the popup itself.

###Can I use this commercially?
Yeah, look at LICENSE

###Any tutorials and/or examples available?
Yeah, [here](http://www.bitfalls.com/search/label/Chrome%20Development)

###How can I contribute?
Keep it up to date. Add some more options that don't complicate things for the user. Write examples and let me know where you used this Skeleton extension, I'll link to them here. Anything helps.

[![Analytics](https://ga-beacon.appspot.com/UA-46899860-1/chromeskel_a/readme)](https://github.com/igrigorik/ga-beacon)
