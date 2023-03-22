import { createSlice } from "@reduxjs/toolkit"


const STATUSES = {
    IDLE : 'idle',
    ERROR : 'error',
    LOADING : 'loading'
}


const initialState = {
    data : [],
    status : 'idle'
};

const productSlice = createSlice({
    name : 'product',
    initialState,
    reducers : {
        add(state, action) {
            state.push(action.payload)
        },

        remove(state, action) {
        return state.filter((item) => item.id !== action.payload)
        },
    },
});


export const {add, remove} = productSlice.actions;
export default productSlice.reducer;