import { state } from "./store";

export const hiddenCls = (id: string) => (state.view === id ? "" : "hidden");
export const selectedCls = (id: string) =>
	state.view === id ? "selected" : "";
