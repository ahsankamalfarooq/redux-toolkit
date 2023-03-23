import { createSlice } from "@reduxjs/toolkit"


export const STATUSES = Object.freeze(
    {
        IDLE : 'idle',
        ERROR : 'error',
        LOADING : 'loading'
    }
)


const initialState = {
    data : [],
    status : STATUSES.IDLE,
};

const productSlice = createSlice({
    name : 'product',
    initialState,
    reducers : {
        setProducts(state, action) {
            //do not do the async req from reducer as 
            // reducer are a sync and pure function mean 
            // they donot have any sideEffects bcz api call is 
            // itself a side effect 
            state.data = action.payload
        },
        setStatus(state, action) {
            state.status = action.payload;
        },

    },
});


export const {setProducts ,setStatus} = productSlice.actions;
export default productSlice.reducer;


// Thunk

export function fetchProducts() {
    return async function fetchProductThunk(dispatch, getState) {
            dispatch(setStatus(STATUSES.LOADING))
            try {
                const res = await fetch('https://fakestoreapi.com/products')
                const data = await res.json() 
                dispatch(setProducts(data))
                dispatch(setStatus(STATUSES.IDLE))
            } catch (err) {
                dispatch(setStatus(STATUSES.ERROR))

        }
    }
}