import React, { Component,Fragment} from 'react';
import {
  BrowserRouter as Router, //路由切换模式(H5模式与Hash模式)
  Route,
  Link,   //类似router-link(vue中)
  Redirect, //重定向
  Switch
} from 'react-router-dom'
const home = ()=><h2>home</h2>
//二级路由
const About = (props)=>(
  <div>
      <h1>About</h1>
      <Link to="/about/us">us</Link>
      <Link to="/about/you">you</Link>
      <Switch>
          <Redirect from="/about" exact to="/about/us"></Redirect>
          <Route path="/about/us" render={()=>{
            return <h3>This is US</h3>
          }}/>
          <Route path="/about/you" render={()=><h3>This is You</h3>}/>
      </Switch>
      
  </div>
)
const Users = ()=><h2>Users</h2>
// const Notfound = ()=><h2>404 page</h2>
class RouterInstance extends Component {
  render() {
    return (
      <div className="root">
        {/* 路由整个部分需要包括在BrowserRouter大组件中 */}
         <Router>
            <Fragment>
                <Link to="/home">Home</Link>
                <Link to = "/about">About</Link>
                <Link to = "/users">Users</Link>
                {/* exact：表示需要完全匹配 */}
                {/* Switch只能匹配到一个Route */}
                <Switch>
                  <Redirect from="/" exact to="/home"></Redirect>
                  <Route path="/home" exact component={home} />
                  <Route path="/about" component={About} />
                  <Route path="/users" component={Users} />
                  <Route path="/not-found" render={()=>{
                      return <h3>404 pages</h3>
                  }} />
                  {/* 当上面的都为匹配到时，匹配404 */}
                  <Redirect to={ {pathname:'/not-found'} }></Redirect>
                </Switch>
                
            </Fragment>
          </Router>   
      </div>
       
    );
  }
}

export default RouterInstance;
