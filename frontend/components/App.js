import React from 'react'

import TodoList from './TodoList';

export default class App extends React.Component {
  constructor(){
    super();
    this.state={
      todos:[
        {
          name: 'Organize Garage',
          id: 1528817077286, 
          completed: false
        },
        {
          name: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        },
        {
          name: 'Study Modules',
          id: 1528817084359,
          completed: true
        }
      ]
    }
  }
  render() {
    const {todos} = this.state;
    return (
      <div>
        <h1>Things I need done!</h1>
        <TodoList todos={todos}/>
        <form>
          <input/>
          <button>Add</button>
        </form>
        <button>Delete</button>
      </div>
    )
  }
}
