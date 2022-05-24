import React, {Component} from "react";
import {Input} from "antd-mobile";
import withMessage from "../withMessage";

class SendAddress extends Component {
  // state = {main:'', sub: ''}
  // // 主要地址信息
  // mainAddress = address => {
  //   this.setState( {main:address})
  // }
  // // 详细门牌号地址
  // subAddress = subAddress => {
  //   this.setState({sub:subAddress}, () => {
  //     this.state.main !== '' && this.props.getAddress(this.state.main + this.state.sub)
  //   })
  // }
  render(){
    return (
      <>
        <Input placeholder='小区/写字楼/学校等' style={{'--placeholder-color':'#999'}} onChange={this.props.inputChange} />
        <section style={{backgroundColor: '#f5f5f5', height: '.025rem', width: '100%', margin: '.2rem 0'}}></section>
        <Input placeholder='详细地址（如门牌号）' style={{'--placeholder-color':'#999'}} onChange={this.props.nodeValueChange}/>
      </>
    )
  }
}

export default withMessage(SendAddress)
