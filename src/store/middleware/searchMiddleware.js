import { setSearchHistory } from "../slices/userSlice";

export const searchMiddleware = (store) => (next) => (action) => {
	switch (action.type) {
		case "nasaApi/executeQuery/fulfilled":
			const { request, keywords } = store.getState().search;
			if (request || keywords){
				store.dispatch(setSearchHistory({searchHistory:[request, keywords, new Date().toJSON()]}));
				const user = store.getState().user;
				localStorage.setItem(user.uid, JSON.stringify(user));
			}

			return next(action);

		default:
			return next(action);
	}
};
