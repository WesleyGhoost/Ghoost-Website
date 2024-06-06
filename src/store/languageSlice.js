import { createSlice } from '@reduxjs/toolkit'

const languageSlice = createSlice({
    name: 'language',
    initialState: 'pt',
    reducers: {
        toggleToPT: (state) => (state === 'pt'),
        toggleToEN: (state) => (state === 'en')
    }
})

export const { toggleToPT, toggleToEN } = languageSlice.actions
export default languageSlice.reducer