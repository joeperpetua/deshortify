import {
	removeShortsFromChannelTab,
	removeShortsFromFeed,
	removeShortsFromSidebar,
} from "./removers";
import { redirectOnShorts } from "./utils";

const observer = new MutationObserver(() => {
	redirectOnShorts();
	removeShortsFromSidebar();
	removeShortsFromChannelTab();
});

document.onscroll = () => {
	removeShortsFromFeed();
};

observer.observe(document.body, {
	subtree: true,
	childList: true,
	attributes: false,
});
