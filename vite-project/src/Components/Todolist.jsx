import React, { useState } from 'react'

export default function Todolist() {
    const [todos, setTodos]=useState([]);
    const[newTodo, setNewTodo]=useState();
    function addTodo() {
        console.log('hello')
        if(newTodo !== ""){
            setTodos([...todos, newTodo])
            setNewTodo('');
        }
    }
  return (
    <div className='todo_list'>
        <h1>Todo List</h1>
        <div>
            <input type="text" placeholder="Add a new TODO" value={newTodo} onChange={(e)=>setNewTodo(e.target.value)}/>
            <button onClick={()=>addTodo}>Submit</button>

            {todos.map((todo, index)=>(
                <li key={index}></li>
            ))}
        </div>
    </div>
  )
}
