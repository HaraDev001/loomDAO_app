import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { 
 licenseReducer,
 saleReducer,
 userReducer
} from './features';

const rootReducer = combineReducers({
    user: userReducer, 
    license: licenseReducer,
    licenseSale: saleReducer
});

const store = configureStore({
    reducer: rootReducer
})

export default store;