import {createAsyncThunk} from '@reduxjs/toolkit';
import {reducerStates} from '../../../utils'; 

const { Pending, Rejected, Fulfilled } = reducerStates;

// reducer function or thunks go here
const createSale = createAsyncThunk(
    'sale/createSale',
    async ({ saleDto } ) => {
        // create new sale in db
        // return the response post request to create new sale 
        const payload =  { 
            ...saleDto 
            // deconstruct retrieved Sale in here to   
        } 
        return payload;
    }
)

export const createSaleThunk = {
    [createSale.pending]: (state, action) => {
        state.status = Pending
    },
    [createSale.fulfilled]: (state, { payload } ) => {
        state.list.push(payload);
        state.status = Fulfilled;
    },
    [createSale.rejected]: (state, { payload } ) => {
        state.status = Rejected;
    }
}