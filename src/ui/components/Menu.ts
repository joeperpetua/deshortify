import { html, runRender } from "../popup";
import { state } from "../store";
import { selectedCls } from "../styleUtils";

const menuItems = [
	{ id: "stats", text: "Stats" },
	{ id: "settings", text: "Settings" },
	{ id: "about", text: "About" },
];

const selectMenuItem = (id: string) => {
	state.view = id;
	runRender();
};

const Menu = () => html`
	<div class="menu">
		${menuItems.map(
			(item) => html`
				<button
					type="button"
					onClick=${() => selectMenuItem(item.id)}
					class=${"styled-button " + selectedCls(item.id)}
				>
					<img src="${chrome.runtime.getURL("assets/" + item.id + ".svg")}" />
					${item.text}
				</button>
			`
		)}
	</div>
`;

export default Menu;
