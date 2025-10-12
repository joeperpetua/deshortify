export const isChannelUrl = () => window.location.href.includes("@");

export const redirectOnShorts = () => {
	if (window.location.href.includes("/shorts")) {
		window.location.replace(window.location.href.replace("/shorts", ""));
	}
};