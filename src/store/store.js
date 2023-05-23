import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./slices/userSlice";
import alertReducer from "./slices/alertSlice";
import dataReducer from "./slices/dataSlice";
import searchReducer from "./slices/searchRequestSlice";

export const store = configureStore({
	reducer: {
		user: userReducer,
		alert: alertReducer,
		data: dataReducer,
		search: searchReducer,
	},
});