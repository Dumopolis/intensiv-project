export const checkUserOnLocalStorage = (user) => {
	const localUserString = localStorage.getItem(user.uid);
	let setUserObject;

	if (localUserString) {
		const localUser = JSON.parse(localUserString);
		setUserObject = {
			uid: localUser.uid,
			email: localUser.email,
			favorites: localUser.favorites,
			history: localUser.history,
		};
	} else {
		setUserObject = {
			uid: user.uid,
			email: user.email,
			favorites: [],
			history: [],
		};
	}
	return setUserObject;
};