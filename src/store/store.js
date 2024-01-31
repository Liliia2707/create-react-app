
import { configureStore } from '@reduxjs/toolkit'
import colorReducer from './colorSlice'
import counterReducer from './counterSlice'
import friendsReducer from './friendsSlice'
import themeReducer from './themeSlice'
import todoReducer from './todoSlice'


export const store = configureStore({
    reducer: {
        counter: counterReducer,
        todos: todoReducer,
        color: colorReducer,
        theme: themeReducer,
        friens: friendsReducer
    }
})