import React,{useState} from 'react'
import Todolist from './Todolist'
import '../component/Todoform.css';

function Todoform() {
    const [input , setInput] = useState("")
    const [todo , setTodo] = useState([ ])

    const handleonchange = (e) =>{
        setInput(e.target.value)
        console.log(input)
    }

    const handleonsubmit = (e) =>{
        e.preventDefault();
        setTodo([
            ...todo,{text:input,compeleted:false,id:Math.random()*1000}
        ]);
        setInput("");
    }

    return (
        <div className='form-div'>
            <h1>ToDo List!</h1>
            <div className='form-innerdiv'>
                <form onSubmit={handleonsubmit} className='form-submit'>
                    <input type='text' value={input} placeholder="Enter Note..."  required onChange={handleonchange}/>
                    <button><i className="fas fa-plus"/></button>
                </form>
                <Todolist todo={todo} setTodo={setTodo}/>
            </div>
        </div>
        
    )
}

export default Todoform
