export const selectors = {
	sidebar: "a[id='endpoint'][title='Shorts']",
	feed: "[is-shorts]",
	channelTab: "[tab-title='Shorts']",
	suggestions: "ytd-reel-shelf-renderer",
	searchResult: "grid-shelf-view-model",
  searchChipFilter: "chip-shape",
  shortThumbnails: "a#thumbnail[href^='/shorts']",
};

export enum Messages {
	INCREMENT_BLOCKED,
}
