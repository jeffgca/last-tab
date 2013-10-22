const tabs = require('sdk/tabs');
const { Hotkey } = require("sdk/hotkeys");

let lastTab = null,
  thisTab = tabs.activeTab;

tabs.on('activate', function(tab) {
  lastTab = thisTab;
  thisTab = tab;
});

tabs.on('close', function(tab) {
  if (tab === thisTab) thisTab = null;
  if (tab === lastTab) lastTab = null;
});
 
let showHotKey = Hotkey({
  combo: "meta-shift-\\",
  onPress: function() {
    if (lastTab) {
      lastTab.activate();
    }
  }
});

