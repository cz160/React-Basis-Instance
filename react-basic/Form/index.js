import React,{Component} from 'react'

class Form extends Component{
    constructor(props){
        super()
        this.state = {
            username : '',
            password : ''
        }
        //防止this丢失
        this.handlerSubmit = this.handlerSubmit.bind(this);
        this.handlerInput = this.handlerInput.bind(this);
    }
    render(){
        return (
            //基于bootstrap的表单
            <div className="panel panel-primary" style={ {width:'400px',margin:'200px auto'} } >
                <div className="panel-heading">表单案例</div>
                <div className="panel-body">
                    <form onSubmit={this.handlerSubmit}>
                        <div className="form-group">
                            <label htmlFor="username">用户名:</label>
                            <input type="text" ref={el=>this.username=el} name="username" className="form-control" value={this.state.username} onChange={this.handlerInput} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">密码:</label>
                            <input type="password" ref={el=>this.password=el} name="password" className="form-control" value={this.state.password} onChange={this.handlerInput} />
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-success" >提交</button>
                            <button type="reset" className="btn btn-danger" >重置</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
    //处理提交
    handlerSubmit(e){
        e.preventDefault()
        //已通过ref标记
        let username = this.username.value
        let password = this.password.value
        console.log('username:'+username)
        console.log('password:'+password)
    }
    //处理表单的变化
    handlerInput(e){
        let type = e.target.name
        let val = e.target.value.toUpperCase()
        this.setState({
            [type]:val
        })
    }
}
export default Form

