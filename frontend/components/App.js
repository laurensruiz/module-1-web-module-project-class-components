import React from 'react'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Things I ned done!</h1>
        <ul>
          <li>Clean Kitchen</li>
          <li>Cook Breakfast</li>
          <li>Study Modules</li>
        </ul>
        <form>
          <input/>
          <button>Add</button>
        </form>
        <button>Delete</button>
      </div>
    )
  }
}
