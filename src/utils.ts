export const isChannelUrl = () => window.location.href.includes("@");

export const getSetting = (key: string) => chrome.storage.local.get(key);

export const redirectOnShorts = async () => {
	const { redirect } = await getSetting("redirect");
	if (!redirect) return;

	if (window.location.href.includes("/shorts")) {
		// Redirect to the visited channel or home page if we are on the shorts page
		const redirectUrl = isChannelUrl() ? window.location.pathname.replace("/shorts", "") : "/"
		window.location.replace(redirectUrl);
	}
};
