import { html } from "../../popup";
import { state } from "../../store";
import { hiddenCls } from "../../styleUtils";
import Switch from "../Switch";

const Settings = () => html`
	<div id="settings" class="${hiddenCls("settings")}">
		<h1>Settings</h1>
		<div class="switch-group">
			${Object.values(state.settings).map(
				(setting) => html`
					<${Switch}
						id=${setting.id}
						text=${setting.text}
						checked=${setting.value}
					/>
				`
			)}
		</div>
	</div>
`;

export default Settings;
