import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form/Form';
import TodoList from './components/TodoList/TodoList';

function App() {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect( () => { 
    const getlocalTodos = () => {
      if (localStorage.getItem('todos') === null) {
        localStorage.setItem('todos', JSON.stringify([]));
      } else {
        let localTodos = JSON.parse(localStorage.getItem('todos')) || [];
        setTodos(localTodos);
      }
    }

    getlocalTodos()
  }, []);

  useEffect(() => {
    const saveLocalTodos = () => {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
    const filterHandler = () => {
      switch (status) {
        case 'completed':
          setFilteredTodos(todos.filter(el => !!el.completed))
          break;
        case 'uncompleted':
          setFilteredTodos(todos.filter(el => !el.completed))
          break;
        default:
          setFilteredTodos(todos);
          break;
      }
    }

    saveLocalTodos();
    filterHandler();
  }, [todos, status]);

  return (
    <div className="App">
      <header>
        <h1>Todo List</h1>
      </header>
      <Form
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        inputText={inputText}
        setStatus={setStatus}
      />
      <TodoList
        todos={filteredTodos}
        setTodos={setTodos}
      />
    </div>
  );
}

export default App;
