import { html } from "../../popup";
import { state } from "../../store";
import { hiddenCls } from "../../styleUtils";

const Stats = () => html`
	<div id="stats" class="${hiddenCls("stats")}">
		<h1>Stats</h1>
		<div>
			<h2>Removed in this session</h2>
			<p>${state.stats.runTimeBlocked}</p>
		</div>
		<div>
			<h2>Removed since installation</h2>
			<p>${state.stats.allTimeBlocked}</p>
		</div>
	</div>
`;

export default Stats;
