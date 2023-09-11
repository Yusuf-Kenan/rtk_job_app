import { combineReducers, configureStore } from "@reduxjs/toolkit";
import jobSlice from "./jobSlice";

const rootReducer = combineReducers({ jobSlice });

const store = configureStore({ reducer: rootReducer });
export default store;
