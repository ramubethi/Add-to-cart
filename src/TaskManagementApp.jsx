// import  { useReducer, useState } from "react";


// const initialState = [];

// const taskReducer = (state, action) => {
//   switch (action.type) {
//     case "ADD_TASK":
//       return [...state, { id: Date.now(), text: action.payload, completed: false }];
//     case "TOGGLE_TASK":
//       return state.map(task =>
//         task.id === action.payload ? { ...task, completed: !task.completed } : task
//       );
//     case "REMOVE_TASK":
//       return state.filter(task => task.id !== action.payload);
//     default:
//       return state;
//   }
// };

// const TaskManagementApp = () => {
//   const [tasks, dispatch] = useReducer(taskReducer, initialState);
//   const [taskText, setTaskText] = useState("");

//   const addTask = () => {
//     if (taskText.trim() !== "") {
//       dispatch({ type: "ADD_TASK", payload: taskText });
//       setTaskText("");
//     }
//   };

//   return (
//     <div className="flex flex-col justify-center items-center h-screen p-4 bg-white shadow-lg rounded-lg">
//       <h2 className="text-xl font-bold mb-4">Task Manager</h2>
//       <div className="flex mb-4">
//         <input
//           type="text"
//           value={taskText}
//           onChange={(e) => setTaskText(e.target.value)}
//           className="border p-2 flex-grow rounded-l bg-white"
//           placeholder="Enter task..."
//         />
//         <button onClick={addTask} className="bg-green-500 text-white p-2 rounded-r">Add</button>
//       </div>
//       <ul>
//         {tasks.map((task) => (
//           <li key={task.id} className="flex justify-between items-center p-2 border-b">
//             <span
//               onClick={() => dispatch({ type: "TOGGLE_TASK", payload: task.id })}
//               className={`cursor-pointer ${task.completed ? "line-through text-gray-500" : ""}`}
//             >
//               {task.text}
//             </span>
//             <button
//               onClick={() => dispatch({ type: "REMOVE_TASK", payload: task.id })}
//               className="text-red-500"
//             >
//               ❌
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default TaskManagementApp;
