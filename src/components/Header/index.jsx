import React, {Component} from 'react';
import {connect} from "react-redux";
import './index.scss'
import PubSub from "pubsub-js";

class Header extends Component {
  state = {props: {}}
  //登录和登出界面的跳转界面跳转，后续增加登出界面跳转逻辑
  clickHandler = (tips) => {
    // 通过消息的订阅与发布实现地址栏编辑的切换
    if (tips === '地址编辑' || tips === '完成') {
      tips === '地址编辑'? PubSub.publish('delAddress', true): PubSub.publish('delAddress', false)
      return
    }
    const  {props} = this.props
    console.log(props)
    this.setState({props})
    Object.keys(this.props.userInfo).length === 0? props.history.push('/login'): props.history.push('/home/mine')
  }

  //回退到上一级菜单
  goBack = event => {
    const  {props, home} = this.props
    if (event.target.className === 'iconfont icon-fangxiang-zuo'){
      props.history.goBack()
    }else if (event.target.className === 'iconfont icon-sousuo'){
      props.history.push(`/home/search/${home}`)
    }
  }
  render() {
    const {location, tips, render} = this.props
    return (
      <div className='header-top'>
        <div className='left' onClick={this.goBack}>{render()}</div>
        <div className='center'>{location}</div>
        <div className='right' onClick={() => {this.clickHandler(tips)}}>{tips}</div>
      </div>
    );
  }
}

const mapStateToProps = state => state
const mapDispatchToProps = {}
export default connect(mapStateToProps, mapDispatchToProps)(Header)
