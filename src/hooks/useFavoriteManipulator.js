import { useState } from "react";
import { useDispatch } from "react-redux";

import { showAlert } from "../store/slices/alertSlice";
import { setUser } from "../store/slices/userSlice";

import { useAuth } from "./useAuth";
import { useUser } from "./useUser";


export function useFavoriteManipulator(id) {
	const [iconState, setIconState] = useState("default");

	const { isAuth } = useAuth();

	const { uid } = useUser();

	const dispatch = useDispatch();

	const addToFavorites = () => {
		setIconState("secondary");
		if (localStorage.getItem(uid)) {
			const userInfo = JSON.parse(localStorage.getItem(uid));
			const userAddFavorite = {
				...userInfo,
				favorites: [...userInfo.favorites, id],
			};
			dispatch(setUser(userAddFavorite));
			localStorage.setItem(uid, JSON.stringify(userAddFavorite));
		} else {
			dispatch(
				showAlert({
					severity: "error",
					title: "Sorry... Unexpected error",
					text: "We are already working on this error. You need re-authenticate!",
				})
			);
		}
	};

	const removeAtFavorites = () => {
		setIconState("default");
		const userInfo = JSON.parse(localStorage.getItem(uid));
		const filterFavoritesList = userInfo.favorites.filter(
			(localStorageId) => localStorageId !== id
		);
		const removeFavorite = {
			...userInfo,
			favorites: filterFavoritesList,
		};
		dispatch(setUser(removeFavorite));
		localStorage.setItem(uid, JSON.stringify(removeFavorite));
	};

	const toggleToFavorites = () => {
		if (isAuth) {
			if (iconState === "default") {
				addToFavorites();
			} else {
				removeAtFavorites();
			}
		} else {
			dispatch(
				showAlert({
					severity: "info",
					title: "Sorry... You can`t use favorites",
					text: `If you want use favorites, you need authenticate or registration`,
				})
			);
		}
	};

	const getFavoriteLocalStorage = () => {
        const userInfo = JSON.parse(localStorage.getItem(uid)) || {};
        const favoritesList = userInfo.favorites;
        const isFavorite = favoritesList && favoritesList.find((localStorageId) => localStorageId === id);
        isFavorite ? setIconState('secondary') : setIconState('default');
    };

	
	return {getFavoriteLocalStorage, toggleToFavorites, iconState};
}
