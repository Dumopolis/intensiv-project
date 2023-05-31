import { useSelector } from "react-redux";

export function useUser() {
	const { uid, email, favorites, openedCardHistory, searchHistory } =
		useSelector((state) => state.user);

	return {
		uid,
		email,
		favorites,
		openedCardHistory,
		searchHistory,
	};
}
