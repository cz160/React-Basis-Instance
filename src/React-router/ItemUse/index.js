//实现Vue中的tag
import React from 'react'
import {withRouter, NavLink} from 'react-router-dom'
import styled from 'styled-components'
/** 
 * <NavLink  /></NavLink>  
 * <Link></Link> 都会将标签最终编译成a标签
 * 目的：实现类似Vue中的tag效果，可生成由用户指定的标签
*/
//props中不仅有路由，还有自定义的属性
const OwnLinkItem = (props)=>{
    let Tag = props.tag || 'a'
    //要加的类名
    let _class = props.className || '';
    let _activeClassName = props.activeClassName || 'active'
    //判断是否加active
    let isActive = props.exact ? props.location.pathname === props.to: props.location.pathname.startsWith(props.to)
    let className = isActive ? _class + ' ' + _activeClassName : _class
    return <Tag className = {' '+className}  onClick={()=>{props.history.push(props.to)}}>{props.children}</Tag>
}
//现在标签已经发生了改变，但是不能实现路由切换了，所有要进行事件绑定

//绑定了时间后，因为内部需要调用history的路由相关api才能实现

//通过观察NavLink结构发现，（只有包上了Route,就能够得到context中的相关路由属性：包含history的api）

//所以可以利用withRouter的高级组件进行处理(会接收一个组件，让包上Router,并返回一个组件)
export const OwnLink = props =>{
    let Item = withRouter(OwnLinkItem)
    // console.log(props)
    return (
        <Item {...props}/>
    )
}
// 为react-router提供的NavLink加样式
export const ActiveNavLink = styled(NavLink)`
    &.active {
        color: tomato;
    }
   color: #666;
`
export const ActiveOwnNavLink = styled(OwnLink)`
    &.active {
        color: pink;
    }
    color:#333
`