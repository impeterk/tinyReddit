import {configureStore} from '@reduxjs/toolkit'
import subredditListReducer from '../components/navigation/subredditList/subredditListSlice'

export default configureStore({
    reducer:{
        subredditList: subredditListReducer
    }
})