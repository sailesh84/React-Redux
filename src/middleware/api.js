import axios from "axios";
import { createAction } from '@reduxjs/toolkit';


console.log("API-middleware");
const api = ({ dispatch }) => (next) => async (action) => {
    if (action.type !== apiCallBegan.type) {
        return next(action);
    }

    const { url, method, data, onStart, onSuccess, onError } = action.payload;

    if (onStart) dispatch({ type: onStart });

    try {
        //We can pass our configuration object for API request
        const response = await axios.request({
            baseURL: "http://localhost:5000/api",
            url,
            method,
            data
        });

        //Dispatch and pass here our action object
        dispatch({ type: onSuccess, payload: response.data });
    } catch (error) {
        if(onError) dispatch({ type: onError, payload: { error: error.message }});
        dispatch({ type: "SHOW_ERROR", payload: { error: error.message }});
    }
};



export default api;
export const apiCallBegan = createAction('api/callBegan');

