import React,{Component} from 'react'
import TodoContent from './TodoContent'
class TodoList extends Component{
    constructor(props){
        super(props)
        this.state= {
            id:0,
            _todos : [],
            type:[
                {id: 1, title: '未完成', type: false},
                {id: 2, title: '已完成', type: true}  
            ]
        }
    }
    render(){
        return (
            <div className="container todo-box">
                <h1 className="text-center"> ToDoList—最简单的待办事项列表 </h1>
                <input type="text" className="form-control" onKeyUp={this.handleInput} />
                {this.randerContent()}
            </div>  
        );
    }
    //属性初始化器(如果这样写的化，就不需要再去bind)
    handleInput = (e)=>{
        if(e.keyCode===13){
            //获得表单的value值
            let title = e.target.value
            //修改state(这种写法适用于需要在更改状态的时候用到属性的时候使用，接收到的参数是当前的状态和最新的属性)
            this.setState(prevState=>{
                prevState._todos.push({
                    id: ++ this.state.id,
                    title,
                    isFinished:false
                })
                return prevState
            })
        }
    }
    //渲染内容
    randerContent(){
        let {_todos,type} = this.state;
        if(_todos.length<=0){
            return  <div className="alert alert-info">没有代办事项，快去添加吧</div>
        }
        return type.map(item=><TodoContent key={item.id}
            title = {item.title}
            todos = {this.correctTodos(item.type)}
            removeTodo = {this.removeTodo}
            changeFinished={this.changeFinished}
            updateTitle = {this.updateTitle}
        />)
    }
    //生成已完成或者未完成的数据
    correctTodos(type){
        return this.state._todos.filter(item=>item.isFinished===type)
    }
    //删除todo
    removeTodo = (id)=>{
        this.setState({
            _todos:this.state._todos.filter(item=>item.id!==id)
        })
    }
    //切换完成状态
    changeFinished=(id)=>{
        this.state._todos.forEach(item=>{
            if(item.id===id) item.isFinished=!item.isFinished
        })
        this.setState({
            _todos:this.state._todos
        })
    }
    //更新title
    updateTitle = (id,title)=>{
        this.state._todos.forEach(item=>{
            if(item.id===id){
                item.title=title
            }
        })
    }
}
export default TodoList