import { createSlice } from '@reduxjs/toolkit';
import {
    createUserThunk,
    updateUserThunk,
    getUserThunk
} from './thunks';

const initialState = {
    user: {},
    state: null
}

const userSlice = createSlice({
    name: "licenses",
    initialState,
    extraReducers: { 
        ...createUserThunk,
        ...updateUserThunk,
        ...getUserThunk
    }
}); 

export default userSlice.reducer;