export const isChannelUrl = () => window.location.href.includes("@");

export const getSetting = (key: string) => chrome.storage.local.get(key);

export const redirectOnShorts = async () => {
  const { redirect } = await getSetting("redirect");
  if (!redirect) return;

  if (window.location.href.includes("/shorts")) {
    // Redirect to the visited channel or home page if we are on the shorts page
    const redirectUrl = isChannelUrl()
      ? window.location.pathname.replace("/shorts", "")
      : "/";
    window.location.replace(redirectUrl);
  }
};

export const getTabId = async () => {
  let queryOptions = { active: true, lastFocusedWindow: true };
    // `tab` will either be a `tabs.Tab` instance or `undefined`.
    let [tab] = await chrome.tabs.query(queryOptions);
    return tab;
}

export const incrementBlockedCount = async () => {
  const tab = await getTabId();
  chrome.storage.local.get("runTimeBlocked", (result) => {
    const newCount = result.runTimeBlocked + 1;
    chrome.storage.local.set({ runTimeBlocked: newCount });
    chrome.action.setBadgeText({ text: newCount.toString(), tabId: tab.id });
  });

  chrome.storage.local.get("allTimeBlocked", (result) => {
    chrome.storage.local.set({ allTimeBlocked: result.allTimeBlocked + 1 });
  });
}
