import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import {Button, Form, Input, Toast} from "antd-mobile";
import {EyeInvisibleOutline, EyeOutline} from "antd-mobile-icons";
import {HeaderSearch, ToLeft} from "@/components/Iconfonts";
import Header from "@/components/Header";
import {login} from "@/api/server.login";
import {refreshCode} from "@/api/server.login";
import ACTIONS_TYPE from "@/redux/constant";
import {recordUserInfo} from "@/redux/actions/login";
import './index.scss'

class Login extends Component {
  state = {srcUri: '', passwordVisible: false}
  //更换验证码图片
   clickChangeHandler = async () => {
    try{
      const response = await refreshCode()
      response.status === 200 && this.setState({srcUri: response.data.code})
    }catch (error){
      console.log(error.message)
    }
  }

  // 登录按钮
  loginHandler = async value => {
    const {username, password, captcha_code} = value
    // 验证码校验
    const result = await login({username, password, captcha_code})
    console.log(this.props, result)
    if (result.data.type !== undefined){
      Toast.show({content:'验证码输入错误，请重新输入'})
    }else {
      // 存储用户的id到redux
      this.props.recordUserId(result.data)
      this.props.history.push('/home/mine')
    }
  }

  // 设置密码的现实与隐藏
  setVisible = () => {
    this.setState(state => ({passwordVisible: !state.passwordVisible}))
  }

  // 一家在就显示验证码
   componentDidMount(){
    this.clickChangeHandler().then(r => r)

  }

  render() {
    return (
      <div className='login-container'>
        <Header render={() => <HeaderSearch value={<ToLeft/>} />} location='密码登录' />
        <section className='form-container'>
          <Form
            onFinish={this.loginHandler}
            footer={
            <Fragment key='footerBtn'>
              <span>温馨提示：未注册过的账号，登录时将自动注册</span>
              <span>注册过的用户可凭账号密码登录</span>
              <Button type='submit' block color='primary'
                      style={{width: '95%', margin: '0 auto', marginTop: '.5rem', '--background-color': '#4cd964', '--border-color': '#4cd964'}}>登录</Button>
            </Fragment>
            }
          >
            <Form.Item name='username'>
              <Input placeholder='账号' />
            </Form.Item>
            <Form.Item
              name='password'
              extra={
                this.state.passwordVisible ? <EyeOutline fontSize={20} color='#3b95e9' onClick={this.setVisible} />:
                <EyeInvisibleOutline fontSize={20} color='#3b95e9' onClick={this.setVisible} />
              }
            >
              <Input placeholder='密码' type={`${this.state.passwordVisible? 'text': 'password'}`}/>
            </Form.Item>
            <Form.Item
              name='captcha_code'
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
              <Input placeholder='验证码'/>
            </Form.Item>
          </Form>
        </section>
        <h6 className='reset'>重置密码？</h6>
      </div>
    );
  }
}

const mapStateToProps = (state) => state
const mapDispatchToProps = {
  [ACTIONS_TYPE.RECORD_USERID]: recordUserInfo
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)
