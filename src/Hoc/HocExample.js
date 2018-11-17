import React,{Component} from 'react'
import CommentList from './CommentList'
import BlogList from './BlogList'
import Datasource from './Date'
class HocExample extends Component{
    render(){
        return (
            <div>
                {/* 点击按钮是触发执行任务 */}
                <button onClick={Datasource.changeComments}>改变评论</button>
                 <CommentList /> 
                 <BlogList />
            </div>
          
        )
    }
}
export default HocExample