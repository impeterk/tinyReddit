import { createSlice } from "@reduxjs/toolkit";

let initialState = ['reactjs', 'cars', 'nextjs', 'unixporn', 'ubuntu']

const subredditListSlice = createSlice({
    name: 'subredditList',
    initialState: initialState,
    reducers: {
        addSubreddit: (state, action) => {
            if (!state.includes(action.payload)) {
            state.unshift(action.payload)
            }
        },
        removeSubreddit: (state, action) => {
            const subredditToDelete = state.findIndex(action.payload)
            state.splice(subredditToDelete, 1)
        }
    }

})

export const {addSubreddit, removeSubreddit} = subredditListSlice.actions
export default subredditListSlice.reducer

export const selectSubredditList = (state) => state.subredditList