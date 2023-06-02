import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	getAuth,
} from "firebase/auth";

import { getUserFromLocalStorage } from "../localStorageHelpers/getUserFromLocalStorage";
import { setCurrentUserLocalStorage } from "../localStorageHelpers/setCurrentUserLocalStorage";
import { removeUser, setUser } from "../store/slices/userSlice";
import { showAlert } from "../store/slices/alertSlice";

import { useUser } from "./useUser";

export function useUserManipilator() {
	const user = useUser();
	const dispatch = useDispatch();
	let navigate = useNavigate();

	const signUp = (email, password) => {
		const auth = getAuth();
		createUserWithEmailAndPassword(auth, email, password)
			.then(({ user }) => {
				const userReady = {
					uid: user.uid,
					email: user.email,
					favorites: [],
					searchHistory: [],
					openedCardHistory: {},
				};
				dispatch(setUser(userReady));
				setCurrentUserLocalStorage(userReady);
				navigate("/");
				return userReady;
			})
			.then(() =>
				dispatch(
					showAlert({
						severity: "success",
						title: "Successful registration",
						text: "Congratulations! You are registered",
					})
				)
			)
			.catch((err) =>
				dispatch(
					showAlert({
						severity: "error",
						title: "An error has occurred",
						text: err.message,
					})
				)
			);
	};

	const logIn = (email, password) => {
		const auth = getAuth();
		signInWithEmailAndPassword(auth, email, password)
			.then(({ user }) => {
				navigate("/");
				const userReady = getUserFromLocalStorage(user.uid, user.email);
				dispatch(setUser(userReady));
				setCurrentUserLocalStorage(userReady);
				return userReady;
			})
			.then((user) =>
				dispatch(
					showAlert({
						severity: "success",
						title: "Successful authorization",
						text: `You are logged in as ${user.email}`,
					})
				)
			)
			.catch((err) =>
				dispatch(
					showAlert({
						severity: "error",
						title: "An error has occurred",
						text: err.message,
					})
				)
			);
	};

	const logOut = () => {
		navigate("/");
		dispatch(
			showAlert({
				severity: "info",
				title: "Logged out",
				text: `You are logged out of  ${user.email}`,
			})
		);
		localStorage.setItem(user.uid, JSON.stringify(user));
		localStorage.setItem("currentUser", null);
		dispatch(removeUser());
	};

	return { signUp, logIn, logOut };
}
