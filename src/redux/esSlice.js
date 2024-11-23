import { createSlice } from "@reduxjs/toolkit";

export const esSlice = createSlice({
    name: 'es',
    initialState: false,
    reducers: {
        isEs: (state, action) => {
            return true;
        },
        isNotEs: (state, action) => {
            return false
        }
    }
});

export const {isEs, isNotEs} = esSlice.actions;