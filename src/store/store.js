import { configureStore } from "@reduxjs/toolkit";
// import logger from "redux-logger";
// import log from "../middleware/log";
// import { legacy_createStore as createStore } from "redux";
// import { devToolsEnhancer } from "redux-devtools-extension";
// import reducer from "./reducer";
import api from "../middleware/api";
import error from "../middleware/error";
import taskReducer from "./tasks";


// const store = createStore(reducer, devToolsEnhancer({trace: true}));
console.log("store");
const store = configureStore({
    reducer: {
        tasks: taskReducer
    },
    devTools: true,
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), api, error]
});

export default store;
