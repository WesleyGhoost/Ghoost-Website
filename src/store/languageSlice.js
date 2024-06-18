import { createSlice } from '@reduxjs/toolkit'

const languageSlice = createSlice({
    name: 'language',
    initialState: 'pt',
    reducers: {
        toggleToPT: () => 'pt',
        toggleToEN: () => 'en'
    }
})

export const { toggleToPT, toggleToEN } = languageSlice.actions
export default languageSlice.reducer