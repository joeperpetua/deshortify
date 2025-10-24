import { getSetting } from "../utils";
import { settings } from "../constants";

export const state = {
	view: "stats",
	stats: {
		runTimeBlocked: 0,
		allTimeBlocked: 0,
	},
	settings,
};

export const syncState = async () => {
	const { runTimeBlocked } = await getSetting("runTimeBlocked");
	const { allTimeBlocked } = await getSetting("allTimeBlocked");
	const { removeSidebar } = await getSetting("removeSidebar");
	const { removeChannels } = await getSetting("removeChannels");
	const { removeFeed } = await getSetting("removeFeed");
	const { removeSuggestions } = await getSetting("removeSuggestions");
	const { removeFromSearchResults } = await getSetting(
		"removeFromSearchResults"
	);
	const { removeVideoLikeShorts } = await getSetting("removeVideoLikeShorts");
	const { redirect } = await getSetting("redirect");

	state.stats = { runTimeBlocked, allTimeBlocked };
	state.settings = {
		removeSidebar: { ...state.settings.removeSidebar, value: removeSidebar },
		removeChannels: { ...state.settings.removeChannels, value: removeChannels },
		removeFeed: { ...state.settings.removeFeed, value: removeFeed },
		removeSuggestions: {
			...state.settings.removeSuggestions,
			value: removeSuggestions,
		},
		removeFromSearchResults: {
			...state.settings.removeFromSearchResults,
			value: removeFromSearchResults,
		},
		removeVideoLikeShorts: {
			...state.settings.removeVideoLikeShorts,
			value: removeVideoLikeShorts,
		},
		redirect: { ...state.settings.redirect, value: redirect },
	};
};
