import React, {Component} from 'react';
<<<<<<< HEAD
import {connect} from "react-redux";
import {Avatar} from "antd-mobile";
import {Link} from "react-router-dom";
=======
import {Avatar} from "antd-mobile";
>>>>>>> 41a6af269ac611d06b23186ee2f581fe304a0177
import {
  ToRight,
  MyList,
  Iphone,
  MyVip,
  MyStore,
  MyService,
  MyElmApp
} from "@/components/Iconfonts";
import './index.scss'

class Profile extends Component {
  render() {
<<<<<<< HEAD
    console.log(this.props, '我的')
    const {userInfo} = this.props
    return (
      <div className='profile_page'>
        <section className='profile-number'>
          <Link to='/login' className='profile-link'>
            <span className='privateImage'>
              <Avatar src={`https://elm.cangdu.org/img/${userInfo.avatar}`} className='privateImage-svg'></Avatar>
            </span>
            <div className='userInfo'>
              <p>{userInfo.username? userInfo.username: '登录 / 注册'}</p>
=======
    return (
      <div className='profile_page'>
        <section className='profile-number'>
          <a className='profile-link'>
            <span className='privateImage'>
              <Avatar src='' className='privateImage-svg'></Avatar>
            </span>
            <div className='userInfo'>
              <p>登录/注册</p>
>>>>>>> 41a6af269ac611d06b23186ee2f581fe304a0177
              <p>
                <Iphone/><span className='icon-mobile-number'>暂无绑定手机号</span>
              </p>
            </div>
              <ToRight color='#fff'/>
<<<<<<< HEAD
          </Link>
=======
          </a>
>>>>>>> 41a6af269ac611d06b23186ee2f581fe304a0177
        </section>
        <section className='info-data'>
          <ul className='clear'>
            <li className='info-data-link'>
<<<<<<< HEAD
              <span className="info-data-top"><b>{userInfo.balance? userInfo.balance: '0'}</b>元</span>
              <span className="info-data-bottom">我的余额</span>
            </li>
            <li className='info-data-link'>
              <span className="info-data-top"><b>{userInfo.gift_amount? userInfo.gift_amount: '0'}</b>个</span>
              <span className="info-data-bottom">我的优惠</span>
            </li>
            <li className='info-data-link'>
              <span className="info-data-top"><b>{userInfo.point? userInfo.point: '0'}</b>分</span>
=======
              <span className="info-data-top"><b>0.00</b>元</span>
              <span className="info-data-bottom">我的余额</span>
            </li>
            <li className='info-data-link'>
              <span className="info-data-top"><b>0</b>个</span>
              <span className="info-data-bottom">我的优惠</span>
            </li>
            <li className='info-data-link'>
              <span className="info-data-top"><b>0</b>分</span>
>>>>>>> 41a6af269ac611d06b23186ee2f581fe304a0177
              <span className="info-data-bottom">我的积分</span>
            </li>
          </ul>
        </section>
        <section className='profile-1reTe'>
          <ul className='my-order'>
            <li>
              <MyList/>
              <div className='list-menu'>
                <span>我的订单</span>
                <ToRight color='#bbb'/>
              </div>
            </li>
            <li>
              <MyStore/>
              <div className='list-menu'>
                <span>积分商城</span>
                <ToRight color='#bbb'/>
              </div>
            </li>
            <li>
              <MyVip/>
              <div className='list-menu'>
                <span>饿了么会员</span>
                <ToRight color='#bbb'/>
              </div>
            </li>
          </ul>
        </section>
        <section className='profile-1reTe'>
          <ul className='my-order'>
            <li>
<<<<<<< HEAD
              <MyService/>
=======
              <MyVip/>
>>>>>>> 41a6af269ac611d06b23186ee2f581fe304a0177
              <div className='list-menu'>
                <span>服务中心</span>
                <ToRight color='#bbb'/>
              </div>
            </li>
            <li>
<<<<<<< HEAD
              <MyElmApp/>
=======
              <MyStore/>
>>>>>>> 41a6af269ac611d06b23186ee2f581fe304a0177
              <div className='list-menu'>
                <span>下载饿了么APP</span>
                <ToRight color='#bbb'/>
              </div>
            </li>
          </ul>
        </section>
      </div>
    );
  }
}

<<<<<<< HEAD
const mapStateToProps = state => state
const mapDispatchToProps = {}
export default connect(mapStateToProps, mapDispatchToProps)(Profile)
=======
export default Profile;
>>>>>>> 41a6af269ac611d06b23186ee2f581fe304a0177
