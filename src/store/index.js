import {configureStore} from '@reduxjs/toolkit'
import subredditReducer from '/src/components/elements/navigation/subredditList/subredditSlice'
import navBarMenuReducer from '/src/components/layout/navBar/navBarSlice'
import postReducer from '/src/components/elements/postList/postListSlice'
import searchReducer from '/src/components/elements/search/searchSlice'
export default configureStore({
    reducer:{
        search: searchReducer,
        post: postReducer,
        subreddit: subredditReducer,
        navBarMenu: navBarMenuReducer
    }
})