import React, {Component} from 'react';
import {Avatar} from "antd-mobile";
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
    return (
      <div className='profile_page'>
        <section className='profile-number'>
          <a className='profile-link'>
            <span className='privateImage'>
              <Avatar src='' className='privateImage-svg'></Avatar>
            </span>
            <div className='userInfo'>
              <p>登录/注册</p>
              <p>
                <Iphone/><span className='icon-mobile-number'>暂无绑定手机号</span>
              </p>
            </div>
              <ToRight color='#fff'/>
          </a>
        </section>
        <section className='info-data'>
          <ul className='clear'>
            <li className='info-data-link'>
              <span className="info-data-top"><b>0.00</b>元</span>
              <span className="info-data-bottom">我的余额</span>
            </li>
            <li className='info-data-link'>
              <span className="info-data-top"><b>0</b>个</span>
              <span className="info-data-bottom">我的优惠</span>
            </li>
            <li className='info-data-link'>
              <span className="info-data-top"><b>0</b>分</span>
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
              <MyVip/>
              <div className='list-menu'>
                <span>服务中心</span>
                <ToRight color='#bbb'/>
              </div>
            </li>
            <li>
              <MyStore/>
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

export default Profile;
