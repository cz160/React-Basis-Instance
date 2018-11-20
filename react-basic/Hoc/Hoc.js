import Datasource from './Date'
import React, { Component } from 'react'
const higherOrderComponent = (UIComponent,handler) =>{
    //接收一个组件并返回一个组件
    return class extends Component {
        constructor(props){
            super(props)
            this.state = {
                lists:handler()
            }
            this.handleChange = this.handleChange.bind(this)
        }
        //将函数放入任务队列
        componentDidMount(){
            //订阅
            Datasource.addChangeListener(this.handleChange)
        }
        componentWillUnmount () {
            Datasource.removeChangeListener(this.handleChange)
        }
        handleChange(){
            this.setState({
                lists:handler()
            })
        }
        render(){
            return <UIComponent {...this.state} />
        }
    }
}
export default higherOrderComponent