import { Messages } from "./constants";
import { incrementBlockedCount } from "./utils";

const defaults = {
  removeSidebar: true,
  removeChannels: true,
  removeFeed: true,
  removeSuggestions: true,
  removeFromSearchResults: true,
  removeVideoLikeShorts: true,
  redirect: true,
  runTimeBlocked: 0,
  allTimeBlocked: 0,
};

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.getKeys((keys) => {
    if (keys.length === 0) {
      chrome.storage.local.set(defaults);
      console.log("[De-Shortify] Set default settings on install", defaults);
    }
  });
});

chrome.runtime.onMessage.addListener((message) => {
  switch (message) {
    case Messages.INCREMENT_BLOCKED:
      incrementBlockedCount();
      break;
  }
});

console.log("[De-Shortify] Background script loaded.");
