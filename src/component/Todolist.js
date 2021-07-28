import React from 'react'
import Todo from './Todo'
import '../component/Todolist.css';

function Todolist({todo ,setTodo}) {
    console.log(todo)
    return (
        <div className="todo-list">
            <div className="todo-container">
                <ul>
                     {todo.map(todos => (
                        <Todo key={todos.id} text={todos.text} 
                        todo={todo} setTodo={setTodo} todos={todos} />
                        ))}
                </ul>
            </div>
        </div>
    )
}
export default Todolist
