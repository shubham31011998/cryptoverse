import { configureStore } from "@reduxjs/toolkit";
import { cryptoApi } from "../Components/Services/CryptoApi";

export default configureStore({
    reducer:{
        [cryptoApi.reducerPath] : cryptoApi.reducer,
    },
})