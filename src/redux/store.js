import { configureStore } from "@reduxjs/toolkit";
import { esSlice } from "./esSlice";

const StoreRedux = configureStore({
    reducer:{
        es: esSlice.reducer,
    }
});

export default StoreRedux;