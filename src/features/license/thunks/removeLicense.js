import {createAsyncThunk} from '@reduxjs/toolkit';
import {reducerStates} from '../../../utils'; 

const { Pending, Rejected, Fulfilled } = reducerStates;

// reducer function or thunks go here
const removeLicense = createAsyncThunk(
    'license/removeLicense',
    async ({ tokenId }) => {
        // do some async process
        // do database operation here to remove license
        // use removed license info as payload
        console.log( tokenId ); 
        return { tokenId };
    }
)

export const removeLicenseThunk = {
    [removeLicense.pending]: (state, action) => {
        state.status = Pending
    },
    [removeLicense.fulfilled]: (state, { tokenId } ) => {
        state.list = state.list.filter(license => license.tokenId !== tokenId );
        state.status = Fulfilled;
    },
    [removeLicense.rejected]: (state, { payload } ) => {
        state.status = Rejected;
    }
}