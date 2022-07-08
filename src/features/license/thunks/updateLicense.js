import {createAsyncThunk} from '@reduxjs/toolkit';
import { reducerStates } from '../../../utils'; 

const { Pending, Rejected, Fulfilled } = reducerStates;

// reducer function or thunks go here
const updateLicense = createAsyncThunk(
    'license/updateLicense',
    async ({ tokenId, updateDto } ) => {
        // retrieve item
        // update retrieved item
        const payload =  Object.assign({}, { 
            ...updateDto 
            // deconstruct retrieved license in here to   
        })
        return { payload, tokenId } ;
    }
)

export const updateLicenseThunk = {
    [updateLicense.pending]: (state, action) => {
        state.status = Pending
    },
    [updateLicense.fulfilled]: (state, { payload, tokenId } ) => {
        state.list.filter(license => license.tokenId === tokenId)[0] = payload;
        state.status = Fulfilled;
    },
    [updateLicense.rejected]: (state, { payload } ) => {
        state.status = Rejected;
    }
}