import { createSlice } from "@reduxjs/toolkit";

const appOpacitySlice = createSlice({
    name: 'appOpacity',
    initialState: '25%',
    reducers: {
        toggleTo100: () => '100%',
        toggleTo25: () => '25%'
    }
})

export const { toggleTo100, toggleTo25 } = appOpacitySlice.actions
export default appOpacitySlice.reducer