import { createSlice } from "@reduxjs/toolkit";

import { getUserFromLocalStorage } from "../../localStorageHelpers/getUserFromLocalStorage";

const currentUserUid = localStorage.getItem("currentUser");


const initialState = getUserFromLocalStorage(currentUserUid);

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setUser(state, action) {
			state.email = action.payload.email;
			state.uid = action.payload.uid;
			state.favorites = action.payload.favorites;
			state.searchHistory = action.payload.searchHistory;
			state.openedCardHistory = action.payload.openedCardHistory;
		},
		setOpenedCardHistory(state, action){
			state.openedCardHistory[action.payload.id] = action.payload.date;
		},
		setSearchHistory(state, action){
			state.searchHistory = [action.payload.searchHistory, ...state.searchHistory];
		},
		removeUser(state) {
			state.email = null;
			state.uid = null;
			state.favorites = [];
			state.searchHistory = [];
			state.openedCardHistory = {};
		},
	},
});

export const { setUser,setOpenedCardHistory, setSearchHistory, removeUser } = userSlice.actions;

export default userSlice.reducer;
