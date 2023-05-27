import { createSlice } from "@reduxjs/toolkit";

const currentUserUid = localStorage.currentUser;

const currentUser = localStorage.getItem(currentUserUid)
	? JSON.parse(localStorage.getItem(currentUserUid))
	: {
			uid: null,
			email: null,
			favorites: [],
			history: [],
	  };

const initialState = currentUser;

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setUser(state, action) {
			state.email = action.payload.email;
			state.uid = action.payload.uid;
			state.favorites = action.payload.favorites;
			state.history = action.payload.history;
		},
		removeUser(state) {
			state.email = null;
			state.uid = null;
			state.favorites = [];
			state.history = [];
		},
	},
});

export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
