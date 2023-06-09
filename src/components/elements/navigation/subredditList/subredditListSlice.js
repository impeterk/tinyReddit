import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialList = ['reactjs', 'cars', 'nextjs', 'unixporn', 'ubuntu']

export const loadSubreddit = createAsyncThunk(
    "subredditList/loadSubreddit",
    async (subreddit) => {
        let response = await fetch(`https://www.reddit.com/r/${subreddit}.json`)
        let responseJSON = await response.json()
        return responseJSON
    }
)

const subredditListSlice = createSlice({
    name: 'subredditList',
    initialState: {
        subredditList: initialList,
        postsInSubreddit: [],
        isLoading: false,
        failedToLoad: false
    },
    reducers: {
        addSubreddit: (state, action) => {
            const subredditList = state.subredditList
            if (!subredditList.includes(action.payload)) {
                subredditList.unshift(action.payload)
            }
            if (subredditList.length > 7) {
                subredditList.pop()
            }
        },
        removeSubreddit: (state, action) => {
            state.subredditList =  state.subredditList.filter(item => item !== action.payload)
        }
    },
    extraReducers: {
        [loadSubreddit.pending]: (state, action) => {
            state.isLoading = true
            state.failedToLoad = false
        },
        [loadSubreddit.fulfilled]: (state, action) => {
            console.log(action.payload)
            state.isLoading = false
            state.failedToLoad = false
        },
        [loadSubreddit.rejected]: (state, action) => {
            state.isLoading = false
            state.failedToLoad = true
        }
    }

})

export const { addSubreddit, removeSubreddit } = subredditListSlice.actions
export default subredditListSlice.reducer

export const selectSubredditList = (state) => state.subredditList.subredditList
export const selectIsLoading = (state) => state.subredditList.isLoading
export const selectPostsInSubreddit = (state) => state.subredditList.postsInSubreddit