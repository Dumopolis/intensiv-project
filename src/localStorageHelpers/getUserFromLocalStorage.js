export const getUserFromLocalStorage = (uid, email) => {
	const localUserString = localStorage.getItem(uid);
	let userInfo;

	if (localUserString) {
		const localUser = JSON.parse(localUserString);
		userInfo = {
			uid: localUser.uid,
			email: localUser.email,
			favorites: localUser.favorites,
			searchHistory: localUser.searchHistory,
			openedCardHistory: localUser.openedCardHistory,
		};
	} else {
		userInfo = {
			uid: uid,
			email: email,
			favorites: [],
			searchHistory: [],
			openedCardHistory: {},
		};
	}
	return userInfo;
};