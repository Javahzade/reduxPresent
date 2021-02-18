import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0,
    name: ''
};

const counterSlice = createSlice({
    name: 'SET_COUNTER',
    initialState,
    reducers: {
        increment(state){
            console.log('increment --->', state);
            state.value++
        },
        decrement(state){
            state.value = 0;
            console.log('decrement --->', state);
        },
        incrementByAmount(state, action){
            console.log('incrementByAmount --->', state);
            state.value += action.payload.value;
            state.name = action.payload.name;
        },
        
    },
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;