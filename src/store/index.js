import {configureStore} from '@reduxjs/toolkit'
import subredditReducer from '@/components/elements/navigation/subredditList/subredditSlice'
import navBarMenuReducer from '@/components/layout/navBar/navBarSlice'
import postReducer from '@/components/elements/postList/postListSlice'
import searchReducer from '@/components/elements/search/searchSlice'
export default configureStore({
    reducer:{
        search: searchReducer,
        post: postReducer,
        subreddit: subredditReducer,
        navBarMenu: navBarMenuReducer
    }
})