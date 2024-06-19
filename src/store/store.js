import { configureStore } from '@reduxjs/toolkit'
import languageSlice from './languageSlice'
import AppOpacitySlice from './AppOpacitySlice'

export const store = configureStore({
    reducer: {
        language: languageSlice,
        appOpacity: AppOpacitySlice
    }
})