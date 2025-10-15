import {
  removeShortsFromChannelTab,
  removeShortsFromFeed,
  removeShortsFromSidebar,
  removeShortsFromSuggestions,
} from "./removers";
import { redirectOnShorts } from "./utils";

const observer = new MutationObserver(async () => {
  redirectOnShorts();
  removeShortsFromSidebar();
  removeShortsFromChannelTab();
  removeShortsFromSuggestions();
  removeShortsFromFeed();
});

observer.observe(document.body, {
  subtree: true,
  childList: true,
  attributes: false,
});
