import React, {Component} from 'react';
import {PhoneFill} from "antd-mobile-icons";
import {Button} from "antd-mobile";
import {connect} from "react-redux";
import {ToRight} from "@/components/Iconfonts";
import './index.scss'
import {Link} from "react-router-dom";

class Info extends Component {
  render() {
    const {userInfo} = this.props
    return (
      <div className='info-container'>
        <section className='userInfo'>
          <ul>
            <li>
              <span>头像</span>
              <div className='avatar'>
                <img src={`https://elm.cangdu.org/img/${userInfo.avatar}`} alt='头像'/>
                <ToRight color='#D8D8D8' fontSize='1.1rem' />
              </div>
            </li>
            <Link to='/home/mine/info/setusername'>
              <li>
                <span>用户名</span>
                <div className='avatar'>
                  <p>{userInfo.username}</p>
                  <ToRight color='#D8D8D8' fontSize='1.1rem' />
                </div>
              </li>
            </Link>
            <Link to='/home/mine/info/address'>
              <li>
                <span>收货地址</span>
                <div className='avatar'>
                  <ToRight color='#D8D8D8' fontSize='1.1rem' />
                </div>
              </li>
            </Link>
          </ul>
        </section>
        <p className='account-binding'>账号绑定</p>
        <section className='userInfo'>
          <ul>
            <li>
              <span><PhoneFill fontSize={16} color='var(--adm-color-primary)'/> 手机</span>
              <div className='avatar'>
                <ToRight color='#D8D8D8' fontSize='1.1rem' />
              </div>
            </li>
          </ul>
        </section>
        <p className='account-binding'>安全设置</p>
        <section className='userInfo'>
          <ul>
            <li>
              <span>登录密码</span>
              <div className='avatar'>
                <p>修改</p>
                <ToRight color='#D8D8D8' fontSize='1.1rem' />
              </div>
            </li>
          </ul>
        </section>
        <Button block style={{margin:'1.2rem auto', '--background-color': '#d8584a', '--text-color': '#fff', width: '93%'}}>退出登录</Button>
      </div>
    );
  }
}

const mapStateToProps = state => state
export default connect(mapStateToProps, {})(Info);
