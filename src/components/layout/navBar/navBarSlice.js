import { createSlice } from "@reduxjs/toolkit";


const navBarMenuSlice = createSlice({
    name: 'navBarMenu',
    initialState: false,
    reducers: {
        toggleMenu: (state, action) => {
            return state = !state
        }
    }

})

export const {toggleMenu} = navBarMenuSlice.actions
export default navBarMenuSlice.reducer

export const selectNavBarMenu = (state) => state.navBarMenu