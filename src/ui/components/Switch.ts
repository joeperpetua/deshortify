import { html } from "../popup";

interface Props {
	id: string;
	text: string;
	checked: boolean;
}

const saveSetting = (e: Event, id: string) => {
	const target = e.target as HTMLInputElement;
	chrome.storage.local.set({ [id]: target.checked });
};

const Switch = ({ id, text, checked }: Props) => html`
	<div class="switch-container">
		<label class="switch" for="${id}">
			<input
				type="checkbox"
				id="${id}"
				checked="${checked}"
				onChange="${(e: Event) => saveSetting(e, id)}"
			/>
			<span class="slider"></span>
		</label>
		${text}
	</div>
`;

export default Switch;
