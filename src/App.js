import React,{Component} from 'react';
import Todos from './Todos';
import Addtodo from './Addtodo';

class App extends Component{
  state={
    todos:[
      {id:1,content:'Complete Learning React'},
      {id:2,content:'Complete Reading Book'}
    ]
  }
  deletetodo=(id)=>{
    const todos=this.state.todos.filter(todo=>{
      return todo.id!==id
    })
    this.setState({
      todos:todos
    })
    console.log(id);
  }
  addtodo=(todo)=>{
    let todos=[...this.state.todos,todo];
    this.setState({
      todos:todos
    })
  }
  render(){
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos={this.state.todos} deletetodo={this.deletetodo}/>
        <Addtodo addtodo={this.addtodo}/>
      </div>
    )
  }
  
}

export default App;
