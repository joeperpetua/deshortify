import {
  removeShortsFromChannelTab,
  removeShortsFromFeed,
  removeShortsFromSidebar,
} from "./removers";
import { redirectOnShorts } from "./utils";

let removedShortsOnLoad = false;

const observer = new MutationObserver(async () => {
  redirectOnShorts();
  removeShortsFromSidebar();
  removeShortsFromChannelTab();

  // Only remove shorts drawer on mutation during the page load,
  // after this is done we can rely on scroll only
  if (!removedShortsOnLoad) {
    const removed = await removeShortsFromFeed();
    if (removed) removedShortsOnLoad = true;
  }
});

// Looking for shorts drawer in feed is a bit more expensive, so we do it on scroll instead of mutation
document.onscroll = () => {
  removeShortsFromFeed();
};

observer.observe(document.body, {
  subtree: true,
  childList: true,
  attributes: false,
});
