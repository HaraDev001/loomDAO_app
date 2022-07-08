import {createAsyncThunk} from '@reduxjs/toolkit';
import {reducerStates} from '../../../utils'; 

const { Pending, Rejected, Fulfilled } = reducerStates;

// reducer function or thunks go here
const removeSale = createAsyncThunk(
    'sale/removeSale',
    async ({ saleId }) => {
        // do some async process
        // do database operation here to remove license
        // use removed license info as payload
        console.log( saleId ); 
        return { saleId };
    }
)

export const removeSaleThunk = {
    [removeSale.pending]: (state, action) => {
        state.status = Pending
    },
    [removeSale.fulfilled]: (state, { saleId } ) => {
        state.list = state.list.filter(sale => sale.saleId !== saleId );
        state.status = Fulfilled;
    },
    [removeSale.rejected]: (state, { payload } ) => {
        state.status = Rejected;
    }
}