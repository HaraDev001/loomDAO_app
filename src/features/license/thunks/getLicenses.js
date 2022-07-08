import {createAsyncThunk} from '@reduxjs/toolkit';
import { reducerStates } from '../../../utils'; 
import { LicensesDataSource, licensesDataSource } from '../../datasources/licenses'; 


const { Pending, Rejected, Fulfilled } = reducerStates;

// reducer function or thunks go here
const getLicenses = createAsyncThunk(
    'license/getLicenses',
    async () => {
        // do some async process
        const ds = new LicensesDataSource()
        const licenses = await ds.getAll()
        console.log(licenses);
        return;
    }
)

export const getLicensesThunk = {
    [getLicenses.pending]: (state, action) => {
        state.status = Pending
    },
    [getLicenses.fulfilled]: (state, { payload } ) => {
        state.list = payload;
        state.status = Fulfilled;
    },
    [getLicenses.rejected]: (state, { payload } ) => {
        state.status = Rejected;
    }
}