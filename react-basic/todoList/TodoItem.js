import React,{Component} from 'react'
class TodoItem extends Component{
    constructor(props){
        super(props)
        this.state = {
            isUpdate : false
        }
    }
    render(){
        let {removeTo,changeFinished} = this.props
        let { title,id,isFinished} = this.props.item
        let {isUpdate} = this.state
        return( 
            <li className="list-group-item" >
                <div className="row">
                    <input className="col-xs-1" type="checkbox" defaultChecked={isFinished} onChange={changeFinished.bind(null,id)} />
                    <div className="title col-xs-8">
                        {
                            isUpdate?<input ref={el=> this.el=el} type="text" onBlur={this.handlerBlur} defaultValue = {title}/>:<span onClick={this.changeUpdate} >{title}</span>
                        }
                    </div>
                    <button onClick={removeTo.bind(null,id)} type="button" className="close col-xs-1" ><span >&times;</span></button>
                </div>
            </li>
        );
    }
    //通过条件渲染修改数据
    changeUpdate = ()=>{
        this.setState({
            isUpdate:!this.state.isUpdate
        })
        //当要显示input的时候，将使其自动获得焦点，此时状态刚刚改变，input还没有出来
        if(!this.state.isUpdate){
            setTimeout(()=>{
                // console.log(this.el)
                this.el.focus()
            }) 
        }
    }
    //修改input的值
    handlerBlur= (e)=>{
        let {id} =  this.props.item
        this.changeUpdate()
        let title = e.target.value
        this.props.updateTitle(id,title)
    }
}

export default TodoItem