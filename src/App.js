import React, { Component} from 'react';
import TodoList from './todoList/TodoList'
class App extends Component {
  render() {
    return (
      //jsx语法
      <div className="App">
          <TodoList />
      </div>
    );
  }
}

export default App;
