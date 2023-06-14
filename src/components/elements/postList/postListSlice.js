import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"


export const loadPost = createAsyncThunk(
    'post/loadPost',
    async ({ subreddit, id }) => {

        let response = await fetch(`https://www.reddit.com/r/${subreddit}/${id}.json`)
        let responseJSON = await response.json()
        return responseJSON
    }
)

const postSlice = createSlice({
    name: 'post',
    initialState: {
        postData: {},
        comments: [],
        isLoadingPost: false,
        failedToLoadPost: false
    },
    reducers: {},
    extraReducers: {
        [loadPost.pending]: (state, action) => {
            state.isLoadingPost = true
            state.failedToLoadPost = false
        },
        [loadPost.fulfilled]: (state, action) => {
            state.postData = action.payload[0].data.children[0].data
            state.comments = action.payload[1].data.children
            // state.comment = state.comments.sort((a,b) => b.data.ups - a.data.ups)
            state.isLoadingPost = false
            state.failedToLoadPost = false
        },
        [loadPost.rejected]: (state, action) => {
            state.isLoadingPost = false
            state.failedToLoadPost = true
        }
    }
})


export default postSlice.reducer

export const selectIsLoading = (state) => state.post.isLoadingPost
export const selectPostData = (state) => state.post.postData
export const selectComments = (state) => state.post.comments