import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {UserAPI} from "../services/UserService";

const rootReducer = combineReducers({
    [UserAPI.reducerPath]: UserAPI.reducer
})


export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(UserAPI.middleware)
    })
}