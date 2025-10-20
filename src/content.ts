import {
  removeChipFilter,
  removeFromSearchResults,
	removeShortsFromChannelTab,
	removeShortsFromFeed,
	removeShortsFromSidebar,
	removeShortsFromSuggestions,
  removeShortVideos,
} from "./removers";
import { redirectOnShorts } from "./utils";

chrome.storage.local.set({ runTimeBlocked: 0 });

const observer = new MutationObserver(async () => {
  redirectOnShorts();
  removeShortsFromSidebar();
  removeShortsFromChannelTab();
  removeShortsFromSuggestions();
  removeShortsFromFeed();
  removeFromSearchResults();
  removeChipFilter();
  removeShortVideos();
});

observer.observe(document.body, {
  subtree: true,
  childList: true,
  attributes: false,
});
