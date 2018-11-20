import React,{Component} from 'react'
import Datasource from './Date'
import higherOrderComponent from './Hoc'
class BlogList extends Component{
    constructor(props){
        super(props)
        this.state = {
            lists:Datasource.getBlogList()
        }
    }
    render(){
        return (
            <div>
                <h2>BlogList</h2>
                <ol className='list-group'>
                    {
                        this.state.lists.map(item =>{
                            return <li key={item.id} className="list-group-item">{item.title}</li>
                        })
                    }
                </ol>
            </div>
        )
    }
}
export default higherOrderComponent(BlogList, () =>  Datasource.getBlogList())