import { createSlice } from "@reduxjs/toolkit";
import { changeColors } from "../utils/changeColors";

const initialState = {
    color: "#ffffff"
};

const colorSlice = createSlice({
    name: "color",
    initialState,
    reducers: {
        changeColor: (state) => {
            state.color = changeColors()
        },
        resetColor: (state) => {
            state.color = "#ffffff"
        }
    }
}
)

export const { changeColor, resetColor } = colorSlice.actions
export default colorSlice.reducer