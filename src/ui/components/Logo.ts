import { html } from "../popup";

const Logo = () => {
	const src = chrome.runtime.getURL("assets/youtube_shorts.svg");
	return html`
		<div class="title-container">
			<img src=${src} alt="Logo" />
			<h1>De-Shortify</h1>
		</div>
	`;
};

export default Logo;
