import { html } from "../../popup";
import { hiddenCls } from "../../styleUtils";
import AboutLinks from "../AboutLinks";

const About = () => html`
	<div id="about" class="${hiddenCls("about")}">
		<h1>About</h1>
		<p>
			De-Shortify is a flexible and customizable browser extension that removes
			shorts from YouTube. In all shape and form.
		</p>
		<${AboutLinks} />
	</div>
`;

export default About;
