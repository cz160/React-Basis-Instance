import React,{Component} from 'react'
import TodoItem from './TodoItem'
class TodoContent extends Component{
    constructor(props){
        super(props)
    }
    render(){
        let {title,todos} = this.props
        return( 
            <div className="todo-content">
                <h3>{title}<span className="label label-primary pull-right">{todos.length}</span> </h3>
                <ul className="list-group">
                    {this.renderItem()}
                </ul>
            </div>
        );
    }
    renderItem(){
        return this.props.todos.map(item=><TodoItem 
            key={item.id}
            item={item}
            removeTo = {this.props.removeTodo}
            changeFinished={this.props.changeFinished}
            updateTitle = {this.props.updateTitle}
        />)
    }
}

export default TodoContent
//有状态组件：  数据格式有两种   props 属性(接收的数据)      state:状态(只有自身能够修改)