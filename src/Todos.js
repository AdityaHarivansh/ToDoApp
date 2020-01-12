import React from 'react';

const Todos=({todos,deletetodo})=>{
    const todolist=todos.length ?(
        todos.map(todo=>{
            return(
                <div className="collection-item" key={todo.id}>
                    <span >{todo.content}</span>
                    <span className="right" onClick={()=>{deletetodo(todo.id)}}> <button>Done</button></span>
                </div>
            )
        })
    ):(
        <p className="center"> You've no todo left for the day</p>
    )
    
    return(
        <div className="todos collection">
            {todolist}
        </div>
    )
}

export default Todos