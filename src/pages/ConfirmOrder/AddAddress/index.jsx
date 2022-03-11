import React, {Component} from 'react';
import {Button, Form, Input, Radio, Space} from "antd-mobile";
import Header from "@/components/Header";
import {ToLeft} from "@/components/Iconfonts";
import './index.scss'

class ConnectPerson extends Component {
  state = {
    name: '',
    sex: 0
  }
  // 输入框信息内容的变化
  inputChange = inputValue => {
    this.setState({name: inputValue})
  }
  // 单选框按钮组的变化, 性别：0代表男性，1代表女性
  radioChange = radioValue => {
    const sex = radioValue === 'female' ? 1 : 0
    this.setState({sex}, () => {
      this.state.name !== '' && this.props.getPersonMessage({name:this.state.name, sex:this.state.sex})
    })
  }
  render() {
    return (
      <>
        <Input placeholder='你的名字' onChange={this.inputChange} style={{borderBottom: '.025rem solid #f5f5f5', '--placeholder-color':'#999', '--font-size': '.7rem'}} />
        <Radio.Group onChange={this.radioChange}>
          <Space direction='horizontal' style={{marginTop: '.5rem'}}>
            <Radio value='male' style={{marginRight: '.5rem'}}>先生</Radio>
            <Radio value='female'>女士</Radio>
          </Space>
        </Radio.Group>
      </>
    )
  }
}

class SendAddress extends Component {
  state = {main:'', sub: ''}
  // 主要地址信息
  mainAddress = address => {
    this.setState( {main:address})
  }
  // 详细门牌号地址
  subAddress = subAddress => {
    this.setState({sub:subAddress}, () => {
      this.state.main !== '' && this.props.getAddress(this.state.main + this.state.sub)
    })
  }
   render(){
     return (
       <>
         <Input placeholder='小区/写字楼/学校等' style={{'--placeholder-color':'#999'}} onChange={this.mainAddress} />
         <section style={{backgroundColor: '#f5f5f5', height: '.025rem', width: '100%', margin: '.2rem 0'}}></section>
         <Input placeholder='详细地址（如门牌号）' style={{'--placeholder-color':'#999'}} onChange={this.subAddress}/>
       </>
     )
   }
}

class AddAddress extends Component {
  formRef = React.createRef()
  // 表单提交成果
  onFinish = values => {

  }

  // 表单提交按钮事件submit, class组建中获取form表单的实例，可以通过ref获取
  onSubmit = () => {
    const form = this.formRef.current?.getFieldsValue()
    console.log(form)
  }

  // 父组件获取子组件FormItem的值
  getPersonMessage = (person) => {
    this.formRef.current?.setFieldsValue({person})
  }
  // 父组件获取子组件FormItem的值
  getAddress = address => {
    this.formRef.current?.setFieldsValue({address})
  }

  render() {
    return (
      <div className='add-address'>
        <Header props={this.props} render={() => <ToLeft/>} location='添加地址' tips='登录|注册' />
        <Form layout='horizontal' ref={this.formRef}
              footer={<Button block type='submit' on color='primary' onClick={this.onSubmit} size='large'>确定</Button>} onFinish={this.onFinish} onFinishFailed={this.onFinishFailed}>
          <Form.Item label='联系人' name='person'>
            <ConnectPerson getPersonMessage={this.getPersonMessage}/>
          </Form.Item>
          <Form.Item label='联系电话' name='phone'>
            <Input placeholder='你的手机号' style={{'--placeholder-color':'#999'}} />
          </Form.Item>
          <Form.Item label='送餐地址' name='address'>
            <SendAddress getAddress={this.getAddress}/>
          </Form.Item>
          <Form.Item label='标签' name='tag'>
            <Input placeholder='无/家/学校/公司' style={{'--placeholder-color':'#999'}} />
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default AddAddress;
