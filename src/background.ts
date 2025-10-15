const defaults = {
  removeSidebar: true,
  removeChannels: true,
  removeFeed: true,
  removeSuggestions: true,
  redirect: true,
};

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.getKeys((keys) => {
    if (keys.length === 0) {
      chrome.storage.local.set(defaults);
      console.log("[De-Shortify] Set default settings on install", defaults);
    }
  });
});

console.log("[De-Shortify] Background script loaded.");
