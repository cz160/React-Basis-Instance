import React, { Component} from 'react';

import styled,{keyframes} from 'styled-components'
//Getting Started
// styled.h1其实是函数，后面跟上模板字符串会执行这个函数，在函数中可以接收到模板字符串中的内容
const Title = styled.h1`
    // 会返回一个组件，将得到的样式生成随机类名后放入style中，为组件中生成的真正的dom添加类名
    font-size:1.5em;
    text-align:center;
    color: palevioletred;
`;
const Wrapper = styled.section`
  padding: 4em;
  background: pink;
`;
//Adapting based on props
const Button = styled.button`
    //接收props进行判断
    background : ${props => props.primary?
        "palevioletred" : "white"
    }
    color: ${props=> props.primary?
        'white':"palevioletred"
    }
    font-size:1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
`
//Extending Styles
const TomatoButton = styled(Button)`
    color: tomato;
    border-color: tomato;
    font-size:2em;
`
const ReverseButton = props =><button {...props} children={props.children.split('').reverse()}/>
//animated
const rotate = keyframes`
    from {
        transform: rotate(0deg)
    }
    to {
        transform: rotate(360deg) 
    }
`
//attaching-addditional-props
const Input = styled.input.attrs({
    type:props=>props.password?'password':'text'
})`
    color: white;
    font-size: 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
    animation : ${rotate} 2s;
    padding: 4em;
    background: ${props => props.light ? '#fff' : 'palevioletred'};
`
//styling-any-components
const Link = props => {
    return (
        <a href={props.to} {...props}>
            <i></i>
            <span>{props.children}</span>
        </a>
    )
}
//样式组件如果处理的是标签，就会将自身身上的所有的属性都给dom加上（dom能识别的），如果处理的是一个组件，styleComponent会一股脑的将这些都传递给这个组件
const StyleLink = styled(Link)`
    color: palevioletred;
    font-weight: bold;
`
class Start extends Component{
    render(){
        return (
            <Wrapper className="container">
                <Title>styled Components</Title>
                <hr />
                <Button>Normal</Button>
                <Button primary>Primary</Button>
                <hr />
                <TomatoButton>Tomato Button</TomatoButton>
                <hr />
                {/* 如果as的是一个组件，真正渲染的就是as的组件 */}
                <Button as={ReverseButton}>请将我进行翻转</Button>
                <hr />
                <Input placeholder="请输入..." password />
                <hr />
                <Link to="www.czhuangjia.top/blog">小昭个人博客网</Link><br />
                <StyleLink to="www.czhuangjia.top/blog">小昭个人博客网</StyleLink>
            </Wrapper>
        )
    }
}
export default Start