import { createSlice } from '@reduxjs/toolkit';
import {
    getSalesThunk,
    updateSaleThunk,
    createSaleThunk,
    removeSaleThunk
} from './thunks';

const initialState = {
    sales: [],
    state: null
}

const licenseSaleSlice = createSlice({
    name: "licenses",
    initialState,
    extraReducers: { 
        ...getSalesThunk,
        ...updateSaleThunk,
        ...createSaleThunk,
        ...removeSaleThunk
    }
}); 

export default licenseSaleSlice.reducer;