import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	request: "",
	keywords: "",
};

const searchSlice = createSlice({
	name: "search",
	initialState,
	reducers: {
		setKeywords(state, action) {
			state.keywords = action.payload.keywords;
		},
		setRequest(state, action) {
			state.request = action.payload.request;
		},
		removeSearch(state) {
			state.keywords = "";
			state.request = "";
		},
	},
});
export const { setKeywords, setRequest, removeSearch } = searchSlice.actions;

export default searchSlice.reducer;
