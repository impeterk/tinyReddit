import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialList = ['reactjs', 'Fun', 'nextjs', 'unixporn', 'ubuntu']

export const loadSubreddit = createAsyncThunk(
    "subreddit/loadSubreddit",
    async (subreddit) => {
        let response = await fetch(`https://www.reddit.com/r/${subreddit}.json`)
        let responseJSON = await response.json()
        return responseJSON
    }
)

const subredditSlice = createSlice({
    name: 'subreddit',
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
            state.postsInSubreddit = action.payload.data.children
            state.isLoading = false
            state.failedToLoad = false
        },
        [loadSubreddit.rejected]: (state, action) => {
            state.isLoading = false
            state.failedToLoad = true
        }
    }

})

export const { addSubreddit, removeSubreddit } = subredditSlice.actions
export default subredditSlice.reducer

export const selectSubredditList = (state) => state.subreddit.subredditList
export const selectIsLoading = (state) => state.subreddit.isLoading
export const selectPostsInSubreddit = (state) => state.subreddit.postsInSubreddit