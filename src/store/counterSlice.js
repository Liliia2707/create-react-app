import { createSlice } from '@reduxjs/toolkit'

const initialState = { counter: 0 }
//слайс в себя принимает объект
const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increase: (state) => {
            state.counter += 1
        },
        decrease: (state) => {
            state.counter -= 1
        },
        reset: (state) => {
            state.counter = 0;
        },
        change_by_value: (state, action) => {
            state.counter += action.payload;
        },
    },
})

export const { increase, decrease, reset, change_by_value } = counterSlice.actions;

export default counterSlice.reducer