import React from 'react';
import './App.css';
import Count from './pages/Count';
import TodoList from './pages/TodoList';

function App() {
  return (
    <>
      <h1>Redux demo</h1>
      <Count />
      <TodoList />
    </>
  );
}

export default App;
