export function setCurrentUserLocalStorage(dataObj, id){
    localStorage.setItem(id, JSON.stringify(dataObj));
	localStorage.setItem("currentUser", id);
}