import React, {Component} from 'react';
import {Button} from "antd-mobile";
import './index.scss'

class SetUserName extends Component {// 受控组件
  state = {username: ''} // 存储修改后的用户名

  // 修改用户名
  okButton = () => {
    const {username} = this.state
    this.props.history.push({pathname: '/home/mine/info', state: {username}})
  }

  // 输入事件
  inputChange = (event) => {
    this.setState({username: event.target.value});
  }

  render() {
    return (
      <div className='set-username'>
        <input placeholder='输入用户名' onInput={this.inputChange}/>
        <section>
          <p>用户名只能修改一次（5-24字符之间）</p>
        </section>
        <Button style={{'--background-color': '#3199e8', '--text-color': '#fff'}} block onClick={this.okButton}>确认修改</Button>
      </div>
    );
  }
}

export default SetUserName;
