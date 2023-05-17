import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	activeAlert: false,
	severity: null,
	title: null,
	text: null,
};

const alertSlice = createSlice({
	name: "alert",
	initialState,
	reducers: {
		showAlert(state, action) {
			state.activeAlert = true;
			state.severity = action.payload.severity;
			state.title = action.payload.title;
			state.text = action.payload.text;
		},
		removeAlert(state) {
			state.activeAlert = false;
			state.severity = null;
			state.title = null;
			state.text = null;
		},
	},
});

export const { showAlert, removeAlert } = alertSlice.actions;

export default alertSlice.reducer;
