export function setCurrentUserLocalStorage(userInfo){
    localStorage.setItem(userInfo.uid, JSON.stringify(userInfo));
	localStorage.setItem("currentUser", userInfo.uid);
}