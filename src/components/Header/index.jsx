import React, {Component} from 'react';
import {connect} from "react-redux";
import './index.scss'

class Header extends Component {
  state = {props: {}}
  //登录和登出界面的跳转界面跳转，后续增加登出界面跳转逻辑
  clickHandler = () => {
    const  {props} = this.props
    this.setState({props})
    props.history.push('/login')
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
        <div className='right' onClick={this.clickHandler}>{tips}</div>
      </div>
    );
  }
}

const mapStateToProps = state => state
const mapDispatchToProps = {}
export default connect(mapStateToProps, mapDispatchToProps)(Header)
