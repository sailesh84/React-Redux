// import axios from "axios";
// import { addTask, removeTask, updateTask } from "./action";
import store from "./store/store";
import { fetchTasks, getTasks, addTask, removeTask, updateTask, loadTasks, addNewTask, updateCompleted, deleteTask } from "./store/tasks";

// store.dispatch(addTask("Task 1"));
// store.dispatch(addTask("Task 2"));

// -----------------------------------------------------------------------------

// store.dispatch(addTask({task: "Task 1"}));
// store.dispatch(addTask({task: "Task 2"}));
// // console.log(store.getState());

// store.dispatch(removeTask({id: 1}));
// // console.log(store.getState());

// store.dispatch(updateTask({id: 2}));
// // console.log(store.getState());

// -------------Using fucntion for calling API----------------------------------------------------------------
// const gettingTasks = async () => {
//     try {
//         // calling api
//         const response = await axios.get("http://localhost:5000/api/tasks");
//         console.log(response);
    
//         //dispatch action
//         store.dispatch(getTask({tasks: response.data}));
//     } catch (error) {
//         store.dispatch({ type: "SHOW_ERROR", payload: {error: error.message} });
//     }
//   };
  
// gettingTasks();

// -------------Using asyncThunk() for calling API----------------------------------------------------------------
// store.dispatch(fetchTasks());

// -------------Using middleware for calling API------------------------------------------------------------------
// store.dispatch({
//     type: 'apiRequest',
//     payload: {
//         url: '/tasks',
//         method: 'GET',
//         onStart: "tasks/apiRequested",
//         onSuccess: 'tasks/getTasks',
//         onError: 'tasks/apiRequestFailed',
//     },
// });
  
// -------------Using apiCallBegan for calling API------------------------------------------------------------------
console.log("frontend");
store.dispatch(loadTasks());
// store.dispatch(addNewTask({ task: "Completed this Exersise." }));
// store.dispatch(updateCompleted({ id: 13, completed: true }));
// store.dispatch(deleteTask({ id: 13 }));
  