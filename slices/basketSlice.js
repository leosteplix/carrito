import { createSlice } from "@reduxjs/toolkit";

const initialState={
    items:[]
}

export const basketSlice= createSlice({
    name:"basket",
    initialState,
    reducers:{
        addToBasket:(state, action)=>{
            state.item = [...state.items,action.payload]
        },
        removeFromBasket: (state,action)=>{
            const index = state.items.findIndex(
                (basketItem)=>basketItem.id===action.payload.id
            )
            let newBasket=[...state.items]
            if(index>=0) {
                newBasket.splice(index,1)
                
            }
        }
    }
})