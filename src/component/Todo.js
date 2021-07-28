import React from 'react'
import '../component/Todo.css';
import { IconButton } from '@material-ui/core';

function Todo({text ,todos ,todo, setTodo}) {

    const handledelete = () =>{
        setTodo(todo.filter(item => item.id !== todos.id));
    }

    const handlecomplete = () =>{
        setTodo(todo.map(item => {
            if(item.id == todos.id) {
                return{
                    ...item, completed:!item.completed,
                };
            }
            return item;
        }))
    }
    return (
        <div className='todo-component'>
            <div className='todo-inner'>
                <li className={`todo-item ${todos.completed ? "completed" : " "}`}>{text}</li>
                <button onClick={handlecomplete}><i className="fas fa-check"/></button>
                <button onClick={handledelete}><i className="fas fa-trash"/></button>
            </div>
        </div>
    )
}

export default Todo
