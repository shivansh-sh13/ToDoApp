const initialState = {
    tasks: []
  };
  
  const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TASK':
        return {
          ...state,
          tasks: [...state.tasks, { text: action.payload, completed: false }]
        };
      case 'DELETE_TASK':
        return {
          ...state,
          tasks: state.tasks.filter((_, index) => index !== action.payload)
        };
      case 'TOGGLE_TASK':
        return {
          ...state,
          tasks: state.tasks.map((task, index) =>
            index === action.payload ? { ...task, completed: !task.completed } : task
          )
        };
      case 'EDIT_TASK':
        const newTask = prompt("Edit your task", state.tasks[action.payload].text);
        return {
          ...state,
          tasks: state.tasks.map((task, index) =>
            index === action.payload ? { ...task, text: newTask } : task
          )
        };
      default:
        return state;
    }
  };
  
  export default tasksReducer;
  