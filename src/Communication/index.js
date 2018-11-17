import React,{Component} from 'react'

class Communication extends Component{
    constructor(props){
        super(props)
        this.state = {
            isShow:false
        }
    }
    render(){
        return (
            <div>
                <button onClick={this.ChangeShow}>toggle</button>
                <Alert isShow={this.state.isShow} slot='fasfsafas'>
                    <div>我想弹出这句话！！！</div>
                </Alert>
            </div>
        )
    }
    ChangeShow=()=>{
        this.setState((prevState)=>{
            prevState.isShow = !prevState.isShow
            return prevState
        })
    }
}
class Alert extends Component{
    constructor(props){
        super(props)
        this.state = {
            show:false
        }
    }
    //当接受到新的props时执行
    componentWillReceiveProps(props){
        this.setState((prevState)=>{
            if(prevState.show===props.isShow){
                prevState.show=!props.isShow
            }else{
                prevState.show=props.isShow
            }
        })
    }
    render(){
        return (
            <div style={      { width:"500px",height:'300px',border:'1px solid black',margin:'100px auto',display:this.state.show?'block':'none'}      } >
                <button onClick={this.ChangeShow}>X</button>
                <div>
                    <h3>{this.props.children}</h3>
                </div>
                <p>{this.props.slot}</p>
            </div>
        )
    }
    ChangeShow=()=>{
        this.setState((prevState)=>{
            prevState.show = !prevState.show
            return prevState
        })
    }
}
export default Communication