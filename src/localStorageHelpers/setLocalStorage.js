export function setLocalStorage(dataObj, id){
    localStorage.setItem(id, JSON.stringify(dataObj));
	localStorage.setItem("currentUser", id);
}