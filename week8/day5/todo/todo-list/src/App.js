// import TodoForm from './components/TodoForm';
import React, { useState }  from 'react';
import './App.css';
import Todo from './components/Todo';

function App (){
  const [todos, setTodos] =useState([])
  
  const toggleComplete = i => 
  setTodos(
    todos.map((todo,k)=> k===i ? {
      todo,
      complete: !todo.complete
    }
    :todo
    )
  );

  return (
    <div className="App">
      
      <div >
        {todos.map(({text,complete}, i)=> (
        <div
        className='list'
        key={text}
        onClick={()=> toggleComplete(i)}
        style={{display: complete ? 'none':''}}>{text}</div>
        ))}
      </div>
      <Todo className='input' onSubmit={text => setTodos([{text,complete:false},...todos])}/>
      
    </div>
  );
}


export default App;
