import {configureStore} from '@reduxjs/toolkit'
import subredditReducer from '@/components/elements/navigation/subredditList/subredditSlice'
import navBarMenuReducer from '@/components/layout/navBar/navBarSlice'
export default configureStore({
    reducer:{
        subreddit: subredditReducer,
        navBarMenu: navBarMenuReducer
    }
})