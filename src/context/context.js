import { createContext, useReducer } from "react";

import { reducer } from "./reducer";

export const FeatureFlagContext = createContext();

const initialState = {
	isTelegramShareEnabled: false,
};

export const ContextProvider = ({ children }) => {
	const [value, dispatch] = useReducer(reducer, initialState);

	value.setTelegramShareStatus = (status) => {
		dispatch({ type: "SET_TELEGRAM_SHARE_STATUS", payload: status });
	};

	return (
		<FeatureFlagContext.Provider value={value}>
			{children}
		</FeatureFlagContext.Provider>
	);
};
