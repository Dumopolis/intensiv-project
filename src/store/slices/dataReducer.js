import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk(
	"data/fetchData",
	async function (_, { rejectWithValue }) {
		try {
			const response = await fetch(
				`https://images-api.nasa.gov/search
					?q=Mars%20Science%20Laboratory
					&media_type=image
					&page_size=8
					&year_start=2023`
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
