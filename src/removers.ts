import { Messages, selectors } from "./constants";
import { getSetting } from "./utils";

export const removeShortsFromSidebar = async () => {
	const { removeSidebar } = await getSetting("removeSidebar");
	if (!removeSidebar) return;

	const shortsSidebarItem = document.querySelector<HTMLAnchorElement>(
		selectors.sidebar
	);

	if (shortsSidebarItem) {
		console.log("[De-Shortify] Removing shorts from sidebar...");
		shortsSidebarItem.remove();
		chrome.runtime.sendMessage(Messages.INCREMENT_BLOCKED);
	}
};

export const removeShortsFromChannelTab = async () => {
	const { removeChannels } = await getSetting("removeChannels");
	if (!removeChannels) return;

	const shortsTab = document.querySelector(selectors.channelTab);

	if (shortsTab) {
		console.log("[De-Shortify] Removing shorts from channel tab...");
		shortsTab.remove();
		chrome.runtime.sendMessage(Messages.INCREMENT_BLOCKED);
	}
};

export const removeShortsFromFeed = async () => {
	const { removeFeed } = await getSetting("removeFeed");
	if (!removeFeed) return;

	const shortsDrawer = document.querySelectorAll<HTMLDivElement>(
		selectors.feed
	);

	if (shortsDrawer) {
		shortsDrawer.forEach((node) => {
			console.log("[De-Shortify] Removing shorts from feed...");
			node.remove();
			chrome.runtime.sendMessage(Messages.INCREMENT_BLOCKED);
		});
	}
};

export const removeShortsFromSuggestions = async () => {
	const { removeSuggestions } = await getSetting("removeSuggestions");
	if (!removeSuggestions) return;

	const shortsDrawer = document.querySelectorAll<HTMLDivElement>(
		selectors.suggestions
	);

	if (shortsDrawer) {
		shortsDrawer.forEach((node) => {
			console.log("[De-Shortify] Removing shorts from suggestions...");
			node.remove();
			chrome.runtime.sendMessage(Messages.INCREMENT_BLOCKED);
		});
	}
};

export const removeFromSearchResults = async () => {
	const { removeFromSearchResults } = await getSetting("removeFromSearchResults");
	if (!removeFromSearchResults) return;

	const shortsDrawer = document.querySelectorAll<HTMLDivElement>(
		selectors.searchResult
	);

	if (shortsDrawer) {
		shortsDrawer.forEach((node) => {
			if (!node.innerText.startsWith("Shorts")) return;

			console.log("[De-Shortify] Removing shorts from search results...");
			node.remove();
			chrome.runtime.sendMessage(Messages.INCREMENT_BLOCKED);
		});
	}
};

export const removeChipFilter = async () => {
	const { removeFromSearchResults } = await getSetting("removeFromSearchResults");
	if (!removeFromSearchResults) return;

	const chips = document.querySelectorAll<HTMLDivElement>(
		selectors.searchChipFilter
	);

	if (chips) {
		chips.forEach((node) => {
			if (!node.innerText.startsWith("Shorts")) return;

			console.log("[De-Shortify] Removing shorts chip filter...");
			node.remove();
			chrome.runtime.sendMessage(Messages.INCREMENT_BLOCKED);
		});
	}
}

/**
 * Removes shorts that are displayed as a video in feed or search results.
 */
export const removeShortVideos = async () => {
	const { removeVideoLikeShorts } = await getSetting("removeVideoLikeShorts");
	if (!removeVideoLikeShorts) return;

	const shorts = document.querySelectorAll<HTMLAnchorElement>(
		selectors.shortThumbnails
	);

	if (shorts) {
		shorts.forEach((node) => {
			const parent = node.parentElement?.parentElement;
			if (!parent) return;

			console.log("[De-Shortify] Removing video-like shorts...", node);
			parent.remove();
			chrome.runtime.sendMessage(Messages.INCREMENT_BLOCKED);
		});
	}
};
