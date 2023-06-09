import {configureStore} from '@reduxjs/toolkit'
import subredditListReducer from '@/components/elements/navigation/subredditList/subredditListSlice'
import navBarMenuReducer from '@/components/layout/navBar/navBarSlice'
export default configureStore({
    reducer:{
        subredditList: subredditListReducer,
        navBarMenu: navBarMenuReducer
    }
})