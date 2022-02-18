import { configureStore } from "@reduxjs/toolkit";
import { cryptoApi } from "../Components/Services/CryptoApi";
import { cryptoNewsApi } from "../Components/Services/CryptoNewsApi";

export default configureStore({
    reducer:{
        [cryptoApi.reducerPath] : cryptoApi.reducer,
        [cryptoNewsApi.reducerPath] : cryptoNewsApi.reducer,
    },
})