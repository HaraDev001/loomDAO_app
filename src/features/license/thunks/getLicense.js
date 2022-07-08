import {createAsyncThunk} from '@reduxjs/toolkit';
import { reducerStates } from '../../../utils'; 

const { Pending, Rejected, Fulfilled } = reducerStates;

// reducer function or thunks go here
const getLicense = createAsyncThunk(
    'license/getLicense',
    async ({address}) => {
        // do some async process
        console.log(address);
        return;
    }
)

export const getLicenseThunk = {
    [getLicense.pending]: (state, action) => {
        state.status = Pending
    },
    [getLicense.fulfilled]: (state, { payload } ) => {
        state.current = payload;
        state.status = Fulfilled;
    },
    [getLicense.rejected]: (state, { payload } ) => {
        state.status = Rejected;
    }
}

