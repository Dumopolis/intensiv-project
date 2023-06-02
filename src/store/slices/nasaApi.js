import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { transformDataObject } from "../../formating/formating";

export const nasaApi = createApi({
	reducerPath: "nasaApi",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://images-api.nasa.gov",
	}),
	endpoints: (builder) => ({
		getMainNews: builder.query({
			query: () => ({
				url: "/search",
				params: {
					q: "new exoplanet",
					media_type: "image",
					page_size: 8,
				},
			}),
			transformResponse: (response) => {
				const newsItems = response.collection.items;
				const itemsFormating = [...newsItems.map((item) => transformDataObject(item))];
				return itemsFormating;
			},
		}),
		getSearchNews: builder.query({
			query: ({ request = "", keywords = "" }) => ({
				url: "/search",
				params: {
					q: request,
					keywords: keywords,
					media_type: "image",
					page_size: 8,
				},
			}),
			transformResponse: (response) => {
				const newsItems = response.collection.items;
				const itemsFormating = [...newsItems.map((item) => transformDataObject(item))];
				return itemsFormating;
			},
		}),
		getOneNews: builder.query({
			query: (id) => ({
				url: "/search",
				params: {
					nasa_id: id,
				},
			}),
		}),
	}),
});

export const {
	useGetMainNewsQuery,
	useGetOneNewsQuery,
	useGetSearchNewsQuery,
} = nasaApi;
