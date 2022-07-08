import {createAsyncThunk} from '@reduxjs/toolkit';
import { reducerStates } from '../../../utils'; 

const { Pending, Rejected, Fulfilled } = reducerStates;

// reducer function or thunks go here
const getUser = createAsyncThunk(
    'user/getUser',
    async ({ address }) => {
        // do some async process
        console.log(address); 
        return;
    }
)

export const getUserThunk = {
    [getUser.pending]: (state, action) => {
        state.status = Pending
    },
    [getUser.fulfilled]: (state, { payload } ) => {
        state.user = payload;
        state.status = Fulfilled;
    },
    [getUser.rejected]: (state, { payload } ) => {
        state.status = Rejected;
    }
}