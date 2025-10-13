import { selectors } from "./constants";
import { getSetting } from "./utils";

export const removeShortsFromSidebar = async () => {
  const { removeSidebar } = await getSetting("removeSidebar");
  if (!removeSidebar) return;

  const shortsSidebarItem = document.querySelector<HTMLAnchorElement>(
    selectors.sidebar,
  );

  if (shortsSidebarItem) {
    console.log("[De-Shortify] Removing shorts from sidebar...");
    shortsSidebarItem.remove();
  }
};

export const removeShortsFromChannelTab = async () => {
  const { removeChannels } = await getSetting("removeChannels");
  if (!removeChannels) return;

  const shortsTab = document.querySelector(selectors.channelTab);

  if (shortsTab) {
    console.log("[De-Shortify] Removing shorts from channel tab...");
    shortsTab.remove();
  }
};

export const removeShortsFromFeed = async () => {
  const { removeFeed } = await getSetting("removeFeed");
  if (!removeFeed) return false;
  let removed = false;

  const shortsDrawer = document.querySelectorAll<HTMLDivElement>(
    selectors.feed,
  );
  if (shortsDrawer) {
    shortsDrawer.forEach((node) => {
      console.log("[De-Shortify] Removing shorts from feed...");
      node.remove();
      removed = true;
    });
  }

  return removed;
};
