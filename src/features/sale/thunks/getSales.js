import {createAsyncThunk} from '@reduxjs/toolkit';
import { reducerStates } from '../../../utils'; 

const { Pending, Rejected, Fulfilled } = reducerStates;

// reducer function or thunks go here
const getSales = createAsyncThunk(
    'sale/getSales',
    async ({ address }) => {
        // do some async process
        console.log(address); 
        return;
    }
)

export const getSalesThunk = {
    [getSales.pending]: (state, action) => {
        state.status = Pending
    },
    [getSales.fulfilled]: (state, { payload } ) => {
        state.list = payload;
        state.status = Fulfilled;
    },
    [getSales.rejected]: (state, { payload } ) => {
        state.status = Rejected;
    }
}