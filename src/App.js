import React, { Component } from 'react';
import './App.css';
import AddTodo from './AddTodo';
import TodoCard from './TodoCard';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      todos: [],
      newTodo: "",
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleTodoClick = this.handleTodoClick.bind(this);
  }

  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleSubmit(e){
    e.preventDefault();
    this.setState({
      todos: [
        {
          text: this.state.newTodo,
          done: false
        },
        ...this.state.todos,
      ],
      newTodo: "",
    });
  }

  handleTodoClick(i){
    const todos = this.state.todos.slice();
    if (todos[i].done){
      todos.splice(i, 1);
    } else {
      todos[i] = Object.assign({}, todos[i], {done: true});
    }
    this.setState({
      todos: todos,
    })
  }

  render(){
    const todoList = this.state.todos.map((current, index) => (
      <TodoCard 
        text={current.text} 
        key={index}
        handleTodoClick={this.handleTodoClick.bind(this, index)}
        taskComplete={current.done}   
      />
    ))
    return (
      <div className="app_container">
        <AddTodo handleSubmit={this.handleSubmit} handleChange={this.handleChange} value={this.state.newTodo} />
        <div className="todoContainer">
          {todoList}
        </div>
      </div>
    )
  }  
};

export default App;
