import {createAsyncThunk} from '@reduxjs/toolkit';
import { reducerStates } from '../../../utils'; 

const { Pending, Rejected, Fulfilled } = reducerStates;

const updateUser = createAsyncThunk(
    'user/updateUser',
    async ({ userId, updateUserDto } ) => {
        // retrieve user from db
        // update retrieved user
        const payload =  Object.assign({}, { 
            ...updateUserDto 
            // deconstruct retrieved license in here to   
        })
        return { payload };
    }
)

export const updateUserThunk = {
    [updateUser.pending]: (state, action) => {
        state.status = Pending
    },
    [updateUser.fulfilled]: (state, { payload } ) => {
        state.user = { ...state.user, ...payload };
        state.status = Fulfilled;
    },
    [updateUser.rejected]: (state, { payload } ) => {
        state.status = Rejected;
    }
}