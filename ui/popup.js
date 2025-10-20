const saveSettings = () => {
  const settings = {
    removeSidebar: document.getElementById("removeSidebar").checked,
    removeChannels: document.getElementById("removeChannels").checked,
    removeFeed: document.getElementById("removeFeed").checked,
    removeSuggestions: document.getElementById("removeSuggestions").checked,
    removeFromSearchResults: document.getElementById("removeFromSearchResults").checked,
    removeVideoLikeShorts: document.getElementById("removeVideoLikeShorts").checked,
    redirect: document.getElementById("redirect").checked,
  };

  chrome.storage.local.set(settings);
  console.log("[De-Shortify] Saved settings", settings);
};

const initListeners = () => {
  document
    .querySelectorAll('.switch-container input[type="checkbox"]')
    .forEach((input) => {
      input.addEventListener("change", saveSettings);
    });
};

window.onload = () => {
  chrome.storage.local.get(
    [
      "removeSidebar",
      "removeChannels",
      "removeFeed",
      "removeSuggestions",
      "removeFromSearchResults",
      "removeVideoLikeShorts",
      "redirect",
    ],
    (result) => {
      document.getElementById("removeSidebar").checked = result.removeSidebar;
      document.getElementById("removeChannels").checked = result.removeChannels;
      document.getElementById("removeFeed").checked = result.removeFeed;
      document.getElementById("removeSuggestions").checked =
        result.removeSuggestions;
      document.getElementById("removeFromSearchResults").checked =
        result.removeFromSearchResults;
      document.getElementById("removeVideoLikeShorts").checked =
        result.removeVideoLikeShorts;
      document.getElementById("redirect").checked = result.redirect;
      console.log("[De-Shortify] Loaded settings", result);
    },
  );
  initListeners();
};
