import { configureStore } from 'redux'
import languageSlice from './languageSlice'

export const store = configureStore({
    reducer: {
        language: languageSlice
    }
})