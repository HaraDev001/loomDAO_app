import { createSlice } from '@reduxjs/toolkit';
import {
    getLicensesThunk,
    updateLicenseThunk,
    createLicenseThunk,
    removeLicenseThunk
} from './thunks';

const initialState = {
    licenses: [],
    state: null
}

const licenseSlice = createSlice({
    name: "licenses",
    initialState,
    extraReducers: { 
        ...getLicensesThunk,
        ...updateLicenseThunk,
        ...createLicenseThunk,
        ...removeLicenseThunk,
    }
}); 

export default licenseSlice.reducer;



