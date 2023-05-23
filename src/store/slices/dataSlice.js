import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk(
	"data/fetchData",
	async function (searchRequest={}, { rejectWithValue }) {
		const {
			request = "",
			mediaType = "image",
			pageSize = "8",
			yearStart = "1980",
			keywords = "",
		} = searchRequest;
		
		try {
			const response = await fetch(
				`https://images-api.nasa.gov/search
					?q=${request}
					&media_type=${mediaType}
					&page_size=${pageSize}
					&year_start=${yearStart}
					&keywords=${keywords}`
			);
			
			if (!response.ok) {
				throw new Error("Server error!");
			}

			const { collection } = await response.json();

			const { items: data } = collection;
			
			return data;
		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
);

const initialState = {
	data: null,
	status: null,
	error: null,
};

const dataSlice = createSlice({
	name: "data",
	initialState,

	extraReducers: {
		[fetchData.pending]: (state) => {
			state.status = "loading";
			state.error = null;
			state.data = null;
		},
		[fetchData.fulfilled]: (state, action) => {
			state.status = "success";
			state.data = action.payload;
		},
		[fetchData.rejected]: (state, action) => {
			state.status = "error";
			state.error = action.payload;
		},
	},
});

export const { getData, removeData } = dataSlice.actions;

export default dataSlice.reducer;