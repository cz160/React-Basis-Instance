import React,{Component} from 'react'

class Button extends Component{
    constructor(props){
        super(props);
        this.state={date:0}
    }
    setNewNumber(){
        //this.setState是异步的(在调用 setState 之后，不要依赖 this.state 来立即反映新值)
        // this.setState({
        //     date:this.state.date+1
        // })
        
        //如果你需要基于当前状态的计算值则传递更新函数而不是对象。
        this.setState((prevState)=>{
            return {date:prevState.date+1}
        })
    }
    handler=()=>{
        this.setNewNumber()
    }
    render(){
        return (
            <div>
                <button onClick = {this.handler} className="btn btn-danger">Increment</button>
                <Content  MyNumber={this.state.date}/>
            </div>
        )
    }
}
class Content extends Component{
    //初始化
    componentWillMount(){
        console.log(document.querySelector('.a'))
        //组件将被渲染(可以用于修改state)(只有初始化阶段调用，组件更新不调用)
        console.log('Component will Mount!!!')
    }
    render(){
        return (
            <div className="a">
                <h3>{this.props.MyNumber}</h3>
            </div>
        )
    }
    componentDidMount(){
        console.log(document.querySelector('.a'))
        //组件已经被渲染(操作dom)(只有初始化阶段调用，组件更新不调用)
        console.log('Component did Mount!!!')
    }
    //运行中
    componentWillReceiveProps(newProps){
        console.log(newProps)
        //接受到新的props时调用
        console.log('Component will receive props!')
    }
    shouldComponentUpdate(newProps,newState){
        //接收到新的props或者state调用
        //用于判断props和state是否改变，是否进行更新动作
        return true
    }
    componentWillUpdate(nextProps,nextState){
        console.log(nextProps,nextState)
        console.log(document.querySelector('.a'))
        //组件准备更新时调用
        console.log('component will update!')
    }
    componentDidUpdate(prevProps,prevState){
        console.log(prevProps,prevState)
        console.log(document.querySelector('.a'))
        //组件更新完成后调用
        console.log('component did update!')
    }
    componentWillUnmount(){
        //组件将要被卸载时调用，一些事件和监听需要在这里清除
        console.log('component will unmount!')
    }

}
export default Button