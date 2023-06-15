import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"


export const loadSearchResults = createAsyncThunk(
    'search/loadSearchResults',
    async(searchTerm) => {

        let response = await fetch(`https://www.reddit.com/search.json?q=${searchTerm}`)
        let responseJSON = await response.json()
        return responseJSON
    }
)


const searchSlice = createSlice({
    name: 'search',
    initialState: {
        searchResults: [],
        searchIsLoading: false,
        failedToLoadSearch: false
    },
    reducers: {},
    extraReducers: {
        [loadSearchResults.pending]: (state, action) => {
            state.searchIsLoading = true
            state.failedToLoadSearch = false
        },
        [loadSearchResults.fulfilled]: (state, action) => {
            console.log(action.payload)
            state.searchIsLoading = false
            state.failedToLoadSearch = false
        },
        [loadSearchResults.rejected]: (state, action) => {
            state.searchIsLoading = false
            state.failedToLoadSearch = true
        }
    }
})

export default searchSlice.reducer

export const selectSearchResults = (state) => state.search.searchResults
export const selectLoadingSearch = (state) => state.search.searchIsLoading