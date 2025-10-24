import { html } from "../popup";

const AboutLinks = () => html`
	<div class="button-container">
		<a
			target="_blank"
			referrerpolicy="no-referrer"
			href="https://github.com/joeperpetua/deshortify/issues/new"
			title="Report issue"
			class="styled-button"
		>
			<img src="${chrome.runtime.getURL("assets/github.svg")}" />
			Report issue
		</a>
		<a
			target="_blank"
			referrerpolicy="no-referrer"
			href="#"
			title="Give feedback"
			class="styled-button"
		>
			<img src="${chrome.runtime.getURL("assets/feedback.svg")}" />
			Give feedback
		</a>
	</div>
`;

export default AboutLinks;
