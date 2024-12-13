//Reducers
// import axios from "./utils/http";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiCallBegan } from "../middleware/api";

let id = 0;
const initialState = {
    tasks: [], //fullfilled
    loading: false, //pending
    error: null, //rejected
};

// export const fetchTasks = createAsyncThunk(
//     'fetchTasks',
//     async (a, { rejectWithValue }) => {
//         try {
//             const response = await axios.get('/tasks');
//             return { tasks: response.data };
//         } catch (error) {
//             return rejectWithValue({ error: error.message });
//         }
//     }
// );

console.log("reducer");
const taskSlice = createSlice({
    name: "tasks", //slice name, that you need to use in store.js
    initialState,
    reducers: {
        apiRequested: (state, action) => {
            state.loading = true;
        },
        apiRequestFailed: (state, action) => {
            state.loading = false;
        },
        getTasks: (state, action) => {
            // return action.payload.tasks;
            state.tasks = action.payload;
            state.loading = false;
        },
        addTask: (state, action) => {
            state.tasks.push(action.payload.task);
        },
        removeTask: (state, action) => {
            const index = state.tasks.findIndex((task) => task.id === action.payload.id); //find index of the removed item
            state.tasks.splice(index, 1); //removed item from the state array
        },
        updateTask: (state, action) => {
            const index = state.tasks.findIndex((task) => task.id === action.payload.id); //find index of the removed item
            state.tasks[index].completed = action.payload.completed;  //update the completed parameter = true
        }
    },
    // extraReducers: {
    //     [fetchTasks.pending]: (state, action) => {
    //         state.loading = true;
    //     },
    //     [fetchTasks.fulfilled]: (state, action) => {
    //         state.tasks = action.payload.tasks;
    //         state.loading = false;
    //     },
    //     [fetchTasks.rejected]: (state, action) => {
    //         state.error = action.payload.error;
    //         state.loading = false;
    //     },
    // },
});


export const { apiRequested, apiRequestFailed, getTasks, addTask, removeTask, updateTask } = taskSlice.actions;
export default taskSlice.reducer;

// Action Creators 
const url = '/tasks';
export const loadTasks = () => apiCallBegan({
    url,
    method: 'GET',
    onStart: apiRequested.type,
    onSuccess: getTasks.type,
    onError: apiRequestFailed.type,
});

export const addNewTask = (task) => apiCallBegan({
    url,
    method: 'POST',
    data: task,
    onSuccess: addTask.type
});

export const updateCompleted = task => apiCallBegan({
    // /task/:id
    url: `${url}/${task.id}`,
    method: "PATCH",
    data: task,
    onSuccess: updateTask.type
});

export const deleteTask = task => apiCallBegan({
    // /task/:id
    url: `${url}/${task.id}`,
    method: "DELETE",
    onSuccess: removeTask.type
});