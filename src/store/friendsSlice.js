import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    friends: []
}

const friendsSlice = createSlice({
    name: "friends",
    initialState,
    reducers: {
        addFriend: (state, action) =>
            console.log(action.payload),
        deleteFriend: (state) => state,
    }
})

export const { addFriend, deleteFriend } = friendsSlice.actions
export default friendsSlice.reducer