import React, {Component} from 'react';
import {Modal} from "antd-mobile";
import {AlipayCircleFill, CheckCircleFill, ExclamationCircleFill} from "antd-mobile-icons";
import Header from "@/components/Header";
import {ToLeft} from "@/components/Iconfonts";
import {WeixinPay} from "@/components/Iconfonts";
import './index.scss'

class Payment extends Component {
  state = {payment: 'alipay', minute: '15', second: '00'}
  // 点击选择支付方式
  handleClick = payment => {
    this.setState({payment})
  }

  // 确定支付订单
  pay = async () => {
    await Modal.alert({
      header: <ExclamationCircleFill style={{fontSize: 96, color: 'var(--adm-color-warning)'}}></ExclamationCircleFill>,
      title: '注意',
      content: <p className='hint'>暂未开放支付功能</p>
    })
    this.props.history.push('/home/list')
  }

  // 倒计时15分钟 支付订单
  componentDidMount(){
    this.timeout = setInterval(() => {
      this.setState(state => state.second > 0? {second: state.second <= 10? `0${--state.second}`: --state.second}: state.minute > 0? {minute: state.minute <= 10? `0${--state.minute}`: --state.minute, second: 59}: {minute: '00', second: '00'})
    }, 1000)
  }

  // 组件将要卸载时，清除定时器
  componentWillUnmount() {
    clearTimeout(this.timeout)
  }

  render() {
    return (
      <div className='payment'>
        <Header props={this.props} render={() => <ToLeft />} location='在线支付'/>
        <section className='pay-time'>
          <p>剩余支付时间</p>
          <p>00：{this.state.minute}：{this.state.second}</p>
        </section>
        <header className='paymentStyle'>选择支付方式</header>
        <section className='payment-choose'>
          <section className='pay' onClick={() => {this.handleClick('aliPay')}}>
            <div className='icon'><AlipayCircleFill fontSize={40} color='var(--adm-color-primary)' /> <span>支付宝</span></div>
            <CheckCircleFill fontSize={24} color={this.state.payment === 'aliPay'? '#4cd964': 'var(--adm-color-weak)'}/>
          </section>
          <section className='pay' onClick={() => {this.handleClick('wechatPay')}}>
            <div className='icon'><WeixinPay fontSize={40} color='#4cd964' /> <span>微信</span></div>
            <CheckCircleFill fontSize={24} color={this.state.payment === 'wechatPay'? '#4cd964': 'var(--adm-color-weak)'}/>
          </section>
        </section>
        <p className='finalPay' onClick={this.pay}>确认支付</p>
      </div>
    );
  }
}

export default Payment;
