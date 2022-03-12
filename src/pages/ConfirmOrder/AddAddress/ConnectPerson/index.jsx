import React, {Component} from "react";
import {Input, Radio, Space} from "antd-mobile";
import withMessage from "../withMessage";

class ConnectPerson extends Component {
  // state = {
  //   name: '',
  //   sex: 0
  // }
  // // 输入框信息内容的变化
  // inputChange = inputValue => {
  //   this.setState({name: inputValue})
  // }
  // // 单选框按钮组的变化, 性别：0代表男性，1代表女性
  // radioChange = radioValue => {
  //   const sex = radioValue === 'female' ? 1 : 0
  //   this.setState({sex}, () => {
  //     this.state.name !== '' && this.props.getPersonMessage({name:this.state.name, sex:this.state.sex})
  //   })
  // }
  render() {
    return (
      <>
        <Input placeholder='你的名字' onChange={this.props.inputChange} style={{borderBottom: '.025rem solid #f5f5f5', '--placeholder-color':'#999', '--font-size': '.7rem'}} />
        <Radio.Group onChange={this.props.nodeValueChange}>
          <Space direction='horizontal' style={{marginTop: '.5rem'}}>
            <Radio value='male' style={{marginRight: '.5rem'}}>先生</Radio>
            <Radio value='female'>女士</Radio>
          </Space>
        </Radio.Group>
      </>
    )
  }
}

export default withMessage(ConnectPerson)
