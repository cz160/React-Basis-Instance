
import React,{Component} from 'react'

class TemperatureInput  extends Component{
    render(){
        return (
            <div className="form-group" style={{width:'200px',margin:'50px auto'}}>
                    <label>{this.props.title}：</label>
                    <input className="form-control" value={this.props.value} onChange={this.handler} />
            </div>
        )

    }
    handler = (e)=>{
        let value = e.target.value
        let type = this.props.type
        this.props.ChangeValue(type,~~value)
    }
}
class Calculator extends Component{
    constructor(props){
        super(props)
        this.state = {
            data:[
                {id:1,title:'华适度',type:'c',value:''},
                {id:2,title:'摄氏度',type:'f',value:''}
            ]
        }     
    }
    render(){
        return (
            <div>
                {this.renderDom()}
            </div>
        )
    } 
    ChangeValue=(type,val)=>{
        this.setState(prevState=>{
           if(type==='c'){
               prevState.data[0].value=val;
               prevState.data[1].value=(val-32)*5/9;
           }
           if(type==='f'){
                prevState.data[1].value=val;
                prevState.data[0].value=val*9/5+32;
           }
            return prevState
        })
    }
    renderDom(){
        return this.state.data.map(item=><TemperatureInput key={item.id} 
            title={item.title} value={item.value} type={item.type}
            ChangeValue={this.ChangeValue}
        />)
    }
}
export default Calculator