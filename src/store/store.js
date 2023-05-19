import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./slices/userSlice";
import alertReducer from "./slices/alertSlice";
import dataReducer from "./slices/dataReducer";

export const store = configureStore({
	reducer: {
		user: userReducer,
		alert: alertReducer,
		data: dataReducer,
	},
});
