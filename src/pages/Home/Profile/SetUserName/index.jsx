import React, {Component} from 'react';
import {Button} from "antd-mobile";
import './index.scss'

class SetUserName extends Component {
  render() {
    return (
      <div className='set-username'>
        <input placeholder='输入用户名'/>
        <section>
          <p>用户名只能修改一次（5-24字符之间）</p>
        </section>
        <Button style={{'--background-color': '#3199e8', '--text-color': '#fff'}} block>确认修改</Button>
      </div>
    );
  }
}

export default SetUserName;
