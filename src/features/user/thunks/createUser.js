import {createAsyncThunk} from '@reduxjs/toolkit';
import {reducerStates} from '../../../utils'; 

const { Pending, Rejected, Fulfilled } = reducerStates;

// reducer function or thunks go here
const createUser = createAsyncThunk(
    'user/createUser',
    async ({ createUserDto } ) => {
        // create new sale in db
        // return the response post request to create new sale 
        const payload =  { 
            ...createUserDto 
            // deconstruct retrieved Sale in here to   
        } 
        return payload;
    }
)

export const createUserThunk = {
    [createUser.pending]: (state, action) => {
        state.status = Pending
    },
    [createUser.fulfilled]: (state, { payload } ) => {
        state.user = payload;
        state.status = Fulfilled;
    },
    [createUser.rejected]: (state, { payload } ) => {
        state.status = Rejected;
    }
}