import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    todos: [
        {
            id: '1',
            taskTitle: 'Task 1',
            taskDescription: 'Complete project presentation',
            doneFlag: false,
        },
        {
            id: '2',
            taskTitle: 'Task 2',
            taskDescription: 'Buy groceries',
            doneFlag: true,
        },
    ],
}

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        changeTodo: (state, action) => {
            state.todos = state.todos.map((el) => el.id === action.payload ? { ...el, doneFlag: !el.doneFlag } : el)
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter((el) => el.id !== action.payload)
        },
        addTodo: (state, action) => {
            state.todos = state.todos
        }
    },
})

export const { changeTodo, deleteTodo } = todoSlice.actions
export default todoSlice.reducer