import { useSelector } from "react-redux";

export function useUser() {
	const { uid, email, favorites, history } = useSelector((state) => state.user);

	return {
		uid,
        email,
        favorites,
        history
	};
}
