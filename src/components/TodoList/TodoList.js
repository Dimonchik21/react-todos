import React from 'react';
import Todo from '../Todo/Todo';
import './main.css';

const TodoList = ({ todos, setTodos }) => {
    
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {todos.map((todo) => (
                    <Todo todos={todos} setTodos={setTodos} todo={todo}  key={todo.id}/>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;