import React, {Component} from 'react';
import {connect} from "react-redux";
import {Avatar} from "antd-mobile";
import {Link} from "react-router-dom";
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
    const {userInfo} = this.props
    return (
      <div className='profile_page'>
        <section className='profile-number'>
          <Link className='profile-link' to='/login'>
            <span className='privateImage'>
              <Avatar src='' className='privateImage-svg'></Avatar>
            </span>
            <div className='userInfo'>
              <p>{userInfo.username? userInfo.username: '登录 / 注册'}</p>
              <p>
                <Iphone/><span className='icon-mobile-number'>暂无绑定手机号</span>
              </p>
            </div>
              <ToRight color='#fff'/>
          </Link>
        </section>
        <section className='info-data'>
          <ul className='clear'>
            <li className='info-data-link'>
              <span className="info-data-top"><b>{userInfo.balance? userInfo.balance: '0'}</b>元</span>
              <span className="info-data-bottom">我的余额</span>
            </li>
            <li className='info-data-link'>
              <span className="info-data-top"><b>{userInfo.gift_amount? userInfo.gift_amount: '0'}</b>个</span>
              <span className="info-data-bottom">我的优惠</span>
            </li>
            <li className='info-data-link'>
              <span className="info-data-top"><b>{userInfo.point? userInfo.point: '0'}</b>分</span>
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
              <MyService/>
              <div className='list-menu'>
                <span>服务中心</span>
                <ToRight color='#bbb'/>
              </div>
            </li>
            <li>
              <MyElmApp/>
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

const mapStateToProps = state => state
const mapDispatchToProps = {}
export default connect(mapStateToProps, mapDispatchToProps)(Profile)
