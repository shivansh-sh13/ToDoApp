import React from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import './App.css';

const App = () => (
  <div className="app">
    <h1>To-Do List</h1>
    <TaskInput />
    <TaskList />
  </div>
);

export default App;