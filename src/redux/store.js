import { configureStore } from "@reduxjs/toolkit";
import MemorySlice from "./slice/MemorySlice";

export const store=configureStore({
    reducer:{
        memory:MemorySlice
    }
})