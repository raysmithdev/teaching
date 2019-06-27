// master component
// start the whole building off
import React from 'react';
import './App.css';
import Header from './components/Header'
import AddTodo from './components/AddTodo'
import Todo from './components/Todo'
import Total from './components/Total'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      todos: []
    }
  }

  addTodo(text) {
    this.setState({ todos: [...this.state.todos, text]})
  }

  render() {
    return (
      <div className="App">
        <Header />
        <AddTodo handleSubmit={text => this.addTodo(text)}  />
        <ul>
          {this.state.todos.map((todo, index) => (
            <div key={index}>
              <Todo todo={todo} />
            </div>
          ))}
        </ul>
        <Total total={this.state.todos.length} />
      </div>
    )
  }
}

export default App;
