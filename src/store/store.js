import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import alertReducer from "./slices/alertSlice";

export const store = configureStore({
	reducer: {
		user: userReducer,
		alert: alertReducer,
	},
});
