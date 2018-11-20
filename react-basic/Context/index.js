//无状态组件
import React, { Component} from 'react';
function ThemedButton(props){
    return (
        <div>
            <button className='btn btn-danger'>{props.theme}</button>
        </div>
        
    );
}
function Toolbar(props){
    return (
        <div>
             <ThemedButton theme={props.theme} />
        </div>
       
    )
}
export default Toolbar
