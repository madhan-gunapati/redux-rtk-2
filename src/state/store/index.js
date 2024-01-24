import { configureStore , combineReducers} from "@reduxjs/toolkit";
import countReducer from "../slices/countSlice";
import nameReducer from "../slices/nameSlice";

const rootReducer = combineReducers({
    nameSlice:nameReducer , 
    countSlice:countReducer
})
const store = configureStore({
    reducer:rootReducer
})

export default store