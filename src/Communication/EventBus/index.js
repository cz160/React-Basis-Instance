import React,{Component} from 'react'
import bus from './bus'
class Bother extends Component{
    render(){
        return (
            <div>
                <h2>我是哥哥</h2>
                <button onClick={this.giveMoney}>给妹妹钱</button>
            </div>
        )
    }
    giveMoney = ()=>{
        bus.emit('give-money',10)
    }
}
class Sister extends Component{
    constructor(props){
        super(props)
        this.state = {
            money:10
        }
    }
    componentWillMount(){
        bus.on('give-money',(count=1)=>{
            this.setState((prevprops)=>{
                this.state.money = prevprops.money+count
                return prevprops
            })
        })
    }
    render(){
        return (
            <div>
                <h2>我是妹妹</h2>
                <p>我先有{this.state.money}元</p>
            </div>
        )
    }
}
class Father extends Component{
    render(){
        return (
            <div>
                <Bother />
                <hr />
                <Sister />
            </div>
        )
    }
}
export default Father