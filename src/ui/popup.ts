import { h, render } from "preact";
import htm from "htm";
import Logo from "./components/Logo";
import Menu from "./components/Menu";
import Stats from "./components/views/Stats";
import Settings from "./components/views/Settings";
import About from "./components/views/About";
import { state, syncState } from "./store";

export const html = htm.bind(h);

export const runRender = async () => {
	await syncState();
	const root = document.querySelector("#app")!;
	console.log('rendering with state', state);
	render(html`<${App} />`, root);
};

const App = () => {
	return html`
		<div class="sidebar">
			<${Logo} />
			<${Menu} />
		</div>
		<div class="main">
			<${Stats} />
			<${Settings} />
			<${About} />
		</div>
	`;
};

(() => {
	runRender();

	chrome.storage.onChanged.addListener(() => {
		runRender();
	});
})();
