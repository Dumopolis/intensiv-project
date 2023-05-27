import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./slices/userSlice";
import alertReducer from "./slices/alertSlice";
import searchReducer from "./slices/searchSlice";
import { nasaApi } from "./slices/nasaApi";

export const store = configureStore({
	reducer: {
		user: userReducer,
		alert: alertReducer,
		search: searchReducer,
		[nasaApi.reducerPath]: nasaApi.reducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(nasaApi.middleware)
});