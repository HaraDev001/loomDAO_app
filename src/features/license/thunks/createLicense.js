import {createAsyncThunk} from '@reduxjs/toolkit';
import {reducerStates} from '../../../utils'; 

const { Pending, Rejected, Fulfilled } = reducerStates;

// reducer function or thunks go here
const createLicense = createAsyncThunk(
    'license/createLicense',
    async ({ licenseDto } ) => {
        // create new license in db
        // return the response post request to create new license 
        const payload =  { 
            ...licenseDto 
            // deconstruct retrieved license in here to   
        } 
        return payload;
    }
)

export const createLicenseThunk = {
    [createLicense.pending]: (state, action) => {
        state.status = Pending
    },
    [createLicense.fulfilled]: (state, { payload } ) => {
        state.list.push(payload);
        state.status = Fulfilled;
    },
    [createLicense.rejected]: (state, { payload } ) => {
        state.status = Rejected;
    }
}