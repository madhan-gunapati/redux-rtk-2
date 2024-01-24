import { createSlice } from "@reduxjs/toolkit";

const countSlice = createSlice({
    name:'countSlice',
    initialState:{
        count:0
    },
    reducers:{
        'increment':(state)=>{state.count += 1},
        'decrement':(state)=>{state.count -= 1},
        'increment_with_value':(state, action)=>{state.count += action.payload.value}
    }
})

export const {increment , decrement , increment_with_value} = countSlice.actions;

export default countSlice.reducer