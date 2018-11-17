import React,{Component} from 'react'
import higherOrderComponent from './Hoc'
import Datasource from './Date'
//UI组件 木偶组件
class CommentList extends Component{
    render(){
        return (
            <div>
                <h2>CommentList</h2>
                <ul className='list-group'>
                    {
                        this.props.lists.map(item =>{
                            return <li key={item.id} className="list-group-item">{item.title}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}
//负责数据的逻辑处理，将其传递给UI组件， 此为容器组件 智能组件
const Container = higherOrderComponent(CommentList,()=>Datasource.getComments())
export default Container