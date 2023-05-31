export const getUserFromLocalStorage = (uid, email) => {
	const localUserString = localStorage.getItem(uid);
	let setUserObject;

	if (localUserString) {
		const localUser = JSON.parse(localUserString);
		setUserObject = {
			uid: localUser.uid,
			email: localUser.email,
			favorites: localUser.favorites,
			searchHistory: localUser.searchHistory,
			openedCardHistory: localUser.openedCardHistory,
		};
	} else {
		setUserObject = {
			uid: uid,
			email: email,
			favorites: [],
			searchHistory: [],
			openedCardHistory: {},
		};
	}
	return setUserObject;
};