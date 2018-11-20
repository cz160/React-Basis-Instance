import React, { Component} from 'react';
import {
  Route,
  NavLink, //与Link相似 多了一个active类名
  Redirect,
  Switch
} from 'react-router-dom'
import qs from 'querystring'
import urlObj from 'url'
import {ActiveNavLink,ActiveOwnNavLink} from './React-router/ItemUse/index'
// import Started from './styledComponents/Basics/index'
// import RouterInstance from './React-router/index'
// import ItemUse from './React-router/ItemUse/index'
const User = (props)=>{
  let url = props.location.search
  // url.parse(urlString,boolean)parse这个方法可以将一个url的字符串解析并返回一个url的对象,设置第二个参数为true时，query属性为一个对象
  let query = urlObj.parse(url,true).query
  return (
    <div>
       <h1>个人心中页面</h1>
       <h2>个人ID:{props.match.params.id}</h2>
       <h2>姓名:{query.name}</h2>
       <h2>年龄:{query.age}</h2>
    </div>
  )
}
class App extends Component {
  render() {
    let query = {name:'小昭',age:20}
    return (
      <div className="App container">
          <div className="panel panel-default">
              <div className="panel-heading">
                 <ActiveOwnNavLink tag="button" to="/home">Home</ActiveOwnNavLink><br />
                 <ActiveNavLink to="/about">About</ActiveNavLink><br />
                 <ActiveNavLink to={{ pathname:'/users/2',search:'?'+qs.stringify(query) }}>Users</ActiveNavLink>
              </div>
          </div>
          <Switch>
              <Redirect path="/" exact to="/home"></Redirect>
              <Route path="/home"  render={()=><h2>这是主页面</h2>} />
              <Route path="/about"  render={()=>{
                 return (
                   <div>
                       <h2>这是关于页面</h2>
                       <p>Language:
                         <NavLink to='/about/cn'>CN</NavLink>&nbsp;
                         <NavLink to='/about/en'>EN</NavLink>
                       </p>
                       <Switch>
                          <Redirect path="/about" exact to="/about/cn"></Redirect>
                          <Route path="/about/cn" render={()=><h1>活动页</h1>}></Route>
                          <Route path="/about/en" render={()=><h1>action pages</h1>}></Route>
                       </Switch>
                       
                   </div>
                 )
              }} />
              {/* 路由传参：Params */}
              <Route path="/users/:id"  component={User} />
              <Route path="/not-Fount"  render={()=><h2>无法找到页面<NavLink to="/home">回到首页</NavLink></h2>} />
              <Redirect to="/not-Fount"></Redirect>
          </Switch>
          
      </div>
    );
  }
}

export default App;
