import {createSlice} from '@reduxjs/toolkit';

const numberSlice = createSlice({
    name:'number',
    initialState:{
        total:1
    },
    reducers:{
        plus:(state,action)=>{
            state.total++;
            console.log(action);
        },
        minus:(state,action)=>{
            state.total--;
            console.log(state.total);
        }
    }

});


export const {plus,minus} = numberSlice.actions;

export default  numberSlice.reducer;