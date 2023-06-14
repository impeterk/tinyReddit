import {configureStore} from '@reduxjs/toolkit'
import subredditReducer from '@/components/elements/navigation/subredditList/subredditSlice'
import navBarMenuReducer from '@/components/layout/navBar/navBarSlice'
import postReducer from '@/components/elements/postList/postListSlice'
export default configureStore({
    reducer:{
        post: postReducer,
        subreddit: subredditReducer,
        navBarMenu: navBarMenuReducer
    }
})