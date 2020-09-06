import React from 'react';
import { CSSTransition } from 'react-transition-group';
import './main.css';

const Todo = ({ todo, todos, setTodos }) => {
    const classItem = `todo-${todo.id}`;

    const deleteItemHandler = (e) => {
        const wrapper = document.getElementById(classItem);
        wrapper.classList.toggle('fall')

        setTimeout(() => {
            setTodos(todos.filter(el => el.id !== todo.id));
        }, 1000);

    }

    const checkItemHandler = (e) => {
        setTodos(todos.map((el) => {
            if (el.id === todo.id) {
                return { ...el, completed: !el.completed }
            }

            return el;
        }));
    }

    return (
        <CSSTransition
            in={true}
            timeout={300}
            classNames="fall"
        >
            <div id={classItem} className="todo">
                <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>{todo.text}</li>
                <button onClick={checkItemHandler} className="complete-btn">
                    <i className="fas fa-check"></i>
                </button>
                <button onClick={deleteItemHandler} className="trash-btn">
                    <i className="fas fa-trash"></i>
                </button>
            </div>
        </CSSTransition>
    );
}

export default Todo;