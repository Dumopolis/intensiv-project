import { createContext, useState } from "react";

export const FeatureFlagContext = createContext();

export const ContextProvider = ({ children }) => {
	const [isTelegramShareEnabled, setTelegramShareEnabled] = useState(false);
	const value = {
		isTelegramShareEnabled,
		setTelegramShareEnabled,
	};
	return (
		<FeatureFlagContext.Provider value={value}>
			{children}
		</FeatureFlagContext.Provider>
	);
};
