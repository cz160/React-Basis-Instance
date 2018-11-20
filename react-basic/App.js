import React, { Component} from 'react';
// import TodoList from './todoList/TodoList'

// import Button from './Context/life'
// import Toolbar from './Context'

//使用Context
// const ThemeContext = React.createContext('light');
// function ThemedButton(props) {
//   // ThemedButton 组件从 context 接收 theme
//   return (
//     <ThemeContext.Consumer>
//        {/*Consumer接收一个函数作为子节点，接受当前context的值并返回一个React节点*/}
//       {theme => <button>{theme}</button>} 
//     </ThemeContext.Consumer>
//   );
// }
// // 中间组件
// function Toolbar(props) {
//   return (
//       <ThemedButton />
//   );
// }
// import Form from './Form/index'
// import Calculator from './StateIncrement/index'
// import Communication from './Communication/index'
// import Father from './Communication/EventBus/index'
import HocExample from './Hoc/HocExample'
class App extends Component {
  render() {
    return (
      //jsx语法
      <div className="App">
          {/* <TodoList />
          <Button /> */}
          {/* <Toolbar theme={'dark'} /> */}
          {/**
            <ThemeContext.Provider value="dark">
              <Toolbar />
            </ThemeContext.Provider>
           */}
           {/* <Form /> */}
           {/* <Calculator /> */}
           {/* <Communication /> */}
           {/* <Father /> */}
           <HocExample />
      </div>
    );
  }
}

export default App;
