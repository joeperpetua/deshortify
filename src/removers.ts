import { selectors } from "./constants";

export const removeShortsFromSidebar = () => {
	const shortsSidebarItem = document.querySelector<HTMLAnchorElement>(
		selectors.sidebar
	);

	if (shortsSidebarItem) {
		console.log("[De-Shortify] Removing shorts from sidebar...");
		shortsSidebarItem.remove();
	}
};

export const removeShortsFromChannelTab = () => {
	const shortsTab = document.querySelector(selectors.channelTab);

	if (shortsTab) {
		console.log("[De-Shortify] Removing shorts from channel tab...");
		shortsTab.remove();
	}
};

export const removeShortsFromFeed = () => {
	const shortsDrawer = document.querySelectorAll<HTMLDivElement>(
		selectors.feed
	);
	if (shortsDrawer) {
		shortsDrawer.forEach((node) => {
			console.log("[De-Shortify] Removing shorts from feed...");
			node.remove();
		});
	}
};