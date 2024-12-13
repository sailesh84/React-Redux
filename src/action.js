import { createAction } from "@reduxjs/toolkit";
import * as actionTypes from "./actionTypes";

//Actions
export const addTask = createAction("ADD_TASK");
export const removeTask = createAction("REMOVE_TASK");
export const updateTask = createAction("TASK_COMPLETED");


// export const addTask = (task) => {
//     return { type: actionTypes.ADD_TASK, payload: { task: task } };
// }

// export const removeTask = (id) => {
//     return { type: actionTypes.REMOVE_TASK, payload: { id: id } };
// }

// export const updateTask = (id) => {
//     return { type: actionTypes.TASK_COMPLETED, payload: { id: id } };
// }