import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	request: "",
	keywords: "",
};

const searchRequestSlice = createSlice({
	name: "search",
	initialState,
	reducers: {
		setRadio(state, action) {
			state.keywords = action.payload.keywords;
		},
		setInput(state, action) {
			state.request = action.payload.request;
		},
		removeSearch(state) {
			state.keywords = "";
			state.request = "";
		},
	},
});
export const { setRadio, setInput, removeSearch } = searchRequestSlice.actions;

export default searchRequestSlice.reducer;
