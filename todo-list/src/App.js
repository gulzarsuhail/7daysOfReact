import React, { Component } from 'react';
import './App.css';
import AddTodo from './AddTodo';
import TodoCard from './TodoCard';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      todo_list: [],
      newTodo: "",
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTodoClick = this.handleTodoClick.bind(this);
  }

  handleSubmit(text){
    this.setState({
      todo_list: [
        {
          text: text,
          done: false
        },
        ...this.state.todo_list,
      ]
    });
  }

  handleTodoClick(i){
    const todo_list = this.state.todo_list.slice();
    if (todo_list[i].done){
      todo_list.splice(i, 1);
    } else {
      todo_list[i] = Object.assign({}, todo_list[i], {done: true});
    }
    this.setState({
      todo_list: todo_list,
    })
  }

  render(){
    const todoList = this.state.todo_list.map((current, index) => (
      <TodoCard 
        text={current.text} 
        key={index}
        handleTodoClick={this.handleTodoClick.bind(this, index)}
        taskComplete={current.done}   
      />
    ))
    return (
      <div className="app_container">
        <AddTodo handleSubmit={this.handleSubmit} />
        <div className="todoContainer">
          {todoList}
        </div>
      </div>
    )
  }  
};

export default App;
