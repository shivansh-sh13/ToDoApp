import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, toggleTask, editTask } from '../redux/actions';

const TaskList = () => {
  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();

  return (
    <div className="task-list">
      {tasks.map((task, index) => (
        <div key={index} className="task-item">
          <span 
            style={{ textDecoration: task.completed ? 'line-through' : 'none' }} 
            onClick={() => dispatch(toggleTask(index))}
          >
            {task.text}
          </span>
          <button onClick={() => dispatch(editTask(index))}>Edit</button>
          <button onClick={() => dispatch(deleteTask(index))}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
