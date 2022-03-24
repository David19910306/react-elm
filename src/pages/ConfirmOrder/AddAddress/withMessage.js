import React, {Component} from "react";

export default function withMessage(WrappedComponent){
  return class WithMessage extends Component{
    state = {msg1: '', msg2: ''}

    // 主要地址信息，和姓名
    inputChange = msg1 => {
      this.setState( {msg1})
    }
    // 详细门牌号地址,和male，female
    nodeValueChange = msg2 => {
      this.setState({msg2}, () => {
        this.state.msg1 !== '' && (this.state.msg2 !== 'male' && this.state.msg2 !== 'female') ? this.props.getAddress(this.state.msg1 + this.state.msg2): this.props.getPersonMessage({name:this.state.msg1, sex:this.state.msg2})
      })
    }

    render() {
      return <WrappedComponent inputChange={this.inputChange} nodeValueChange={this.nodeValueChange}/>
    }
  }
}
