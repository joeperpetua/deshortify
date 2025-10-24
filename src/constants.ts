export const selectors = {
	sidebar: "a[id='endpoint'][title='Shorts']",
	feed: "[is-shorts]",
	channelTab: "[tab-title='Shorts']",
	suggestions: "ytd-reel-shelf-renderer",
	searchResult: "grid-shelf-view-model",
	searchChipFilter: "chip-shape",
	shortThumbnails: "a#thumbnail[href^='/shorts']",
};

export const settings: Record<
	string,
	{ id: string; text: string; value: boolean }
> = {
	removeSidebar: {
		id: "removeSidebar",
		text: "Remove shorts from sidebar",
		value: true,
	},
	removeChannels: {
		id: "removeChannels",
		text: "Remove shorts from channels",
		value: true,
	},
	removeFeed: {
		id: "removeFeed",
		text: "Remove shorts from feed",
		value: true,
	},
	removeSuggestions: {
		id: "removeSuggestions",
		text: "Remove shorts from suggestions",
		value: true,
	},
	removeFromSearchResults: {
		id: "removeFromSearchResults",
		text: "Remove shorts from search results",
		value: true,
	},
	removeVideoLikeShorts: {
		id: "removeVideoLikeShorts",
		text: "Remove video-like shorts",
		value: true,
	},
	redirect: {
		id: "redirect",
		text: "Redirect out of shorts",
		value: false,
	},
};

export enum Messages {
	INCREMENT_BLOCKED,
}
