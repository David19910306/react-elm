import React, {Component} from 'react';
import Header from "@/components/Header";
import {ToLeft} from "@/components/Iconfonts";
import {Button, Form, Input, Toast} from "antd-mobile";
import {refreshCode, resetPassword} from "@/api/server.login";
import './index.scss'

class Forget extends Component {

  state = {srcUri: ''}

  //更换验证码图片
  clickChangeHandler = async () => {
    try{
      const response = await refreshCode()
      response.status === 200 && this.setState({srcUri: response.data.code})
    }catch (error){
      console.log(error.message)
    }
  }

  componentDidMount(){
    this.clickChangeHandler().then(r => r)
  }

  // 修改密码
  resetPassword = async value => {
    console.log('修改密码', value)
    const result = await resetPassword({...value})
    result.data.status === 1? Toast.show({content: result.data.success}): Toast.show({content: '密码修改失败'})
  }

  render() {
    return (
      <div className='forget-password'>
        <Header render = {() => <ToLeft />} location='重置密码' props={this.props}/>
        <section className='reset-password'>
          <Form name='form'
                onFinish={this.resetPassword}
                footer={<Button block type='submit' size='large' style={{'--background-color': '#4cd964', '--text-color': '#fff'}}>确认修改</Button>}>
            <Form.Item name='username' rules={[{required: true}]}>
              <Input placeholder='账号' style={{'--placeholder-color': '#666'}} />
            </Form.Item>
            <Form.Item name='oldpassWord'>
              <Input placeholder='旧密码' style={{'--placeholder-color': '#666'}} />
            </Form.Item>
            <Form.Item name='newpassword'>
              <Input placeholder='请输入新密码密码' style={{'--placeholder-color': '#666'}} />
            </Form.Item>
            <Form.Item name='confirmpassword'>
              <Input placeholder='请确认密码' style={{'--placeholder-color': '#666'}} />
            </Form.Item>
            <Form.Item name='captcha_code'
              extra={
                <div className='identificateCode'>
                  <img src={this.state.srcUri} alt='验证码'/>
                  <section className='tips'>
                    <h6>看不清</h6>
                    <h6 onClick={this.clickChangeHandler}>换一张</h6>
                  </section>
                </div>
              }
            >
              <Input placeholder='验证码' style={{'--placeholder-color': '#666'}} />
            </Form.Item>
          </Form>
        </section>
      </div>
    );
  }
}

export default Forget;
