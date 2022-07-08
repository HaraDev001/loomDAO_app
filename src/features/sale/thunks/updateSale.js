import {createAsyncThunk} from '@reduxjs/toolkit';
import { reducerStates } from '../../../utils'; 

const { Pending, Rejected, Fulfilled } = reducerStates;

// reducer function or thunks go here
const updateSale = createAsyncThunk(
    'sale/updateSale',
    async ({ saleId, updateDto } ) => {
        // retrieve item
        // update retrieved item
        const payload =  Object.assign({}, { 
            ...updateDto 
            // deconstruct retrieved license in here to   
        })
        return { payload, saleId } ;
    }
)

export const updateSaleThunk = {
    [updateSale.pending]: (state, action) => {
        state.status = Pending
    },
    [updateSale.fulfilled]: (state, { payload, saleId } ) => {
        state.list.filter(sale => sale.saleId === saleId)[0] = payload;
        state.status = Fulfilled;
    },
    [updateSale.rejected]: (state, { payload } ) => {
        state.status = Rejected;
    }
}