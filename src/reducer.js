import { createReducer } from "@reduxjs/toolkit";
import { addTask, removeTask, updateTask } from "./action";
import * as actionTypes from "./actionTypes";

let id = 0;

//New pattern by using @reduxjs/toolkit
export default createReducer([], {
  [addTask.type]: (state, action) => {
    state.push({
      id: ++id,
      task: action.payload.task,
      completed: false,
    })
  },

  [removeTask.type]: (state, action) => {
    const index = state.findIndex((task) => task.id === action.payload.id); //find index of the removed item
    state.splice(index, 1); //removed item from the state array
  },

  [updateTask.type]: (state, action) => {
    const index = state.findIndex((task) => task.id === action.payload.id); //find index of the removed item
    state[index].completed = true;  //update the completed parameter = true
  }

});


// Note: store have an array of tasks, so our initial state is an empty array  //Old Pattern
// export default function reducer(state = [], action) {  
//   switch (action.type) {
//     // case actionTypes.ADD_TASK:
//     case addTask.type:
//       return [
//         ...state,
//         {
//           id: ++id,
//           task: action.payload.task,
//           completed: false,
//         },
//       ];

//     // case actionTypes.REMOVE_TASK:
//     case removeTask.type:
//       return state.filter((task) => task.id !== action.payload.id);

//     // case actionTypes.TASK_COMPLETED:
//     case updateTask.type:
//       return state.map((task) => task.id === action.payload.id ? {...task, completed: true} : task);
//     default:
//       return state;
//   }
// }
