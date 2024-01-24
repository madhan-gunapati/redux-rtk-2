import { createSlice } from "@reduxjs/toolkit"
import { act } from "react-dom/test-utils"
const nameSlice = createSlice({
    name:'nameSlice',
    initialState:{
        'firstName':'David',
        'secondName':'Paul'
    },
    reducers:{
        'first_name':(state, action)=>{
            state.firstName = action.payload.name
        },
        'second_name':(state, action)=>{
            state.secondName = action.payload.name
        }
    }
})

export const {first_name , second_name} = nameSlice.actions;
export default nameSlice.reducer;