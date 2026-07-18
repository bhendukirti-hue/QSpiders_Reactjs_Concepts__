import { createSlice } from "@reduxjs/toolkit";

const intialvalue={count:0}

const counterSlice=createSlice({
    name:"counter",
    initialState:intialvalue,
    reducers:{
        increment:(state)=>{state.count+=1},
        decrement:(state)=>{state.count-=1},
        reset:(state)=>{state.count=0}
    }
})
export const {increment,decrement,reset}=counterSlice.actions
 const counterReducer=counterSlice.reducer
 export default counterReducer