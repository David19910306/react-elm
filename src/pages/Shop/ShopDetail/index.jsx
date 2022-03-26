import React, {Component} from 'react';
import Header from "@/components/Header";
import {ToLeft,ToRight} from "@/components/Iconfonts";
import {Tag} from "antd-mobile";
import {Link} from "react-router-dom";
import {FrownFill} from "antd-mobile-icons";
import './index.scss'

class ShopDetail extends Component {

  componentDidMount(){
    // 接收state方式传过来的参数

  }

  render() {
    const {restaurant} = this.props.location.state
    console.log(restaurant)
    return (
      <div className='shop-detail'>
        <Header location='商家详情' render={() => <ToLeft />} props={this.props}/>
        <section className='detail-body'>
          <section className='activityProps'>
            <header>活动与属性</header>
            <ul className='actibities_ul'>
              {
                restaurant.activities.map(activity => <li key={activity._id}>
                  <Tag color={`#${activity.icon_color}`}>{activity.icon_name}</Tag>
                  <span>{activity.description}(APP专享)</span>
                </li>)
              }
            </ul>
            <ul className='actibities_ul'>
              {
                restaurant.supports.map(support => <li key={support._id}>
                  <Tag color={`#${support.icon_color}`}>{support.icon_name}</Tag>
                  <span>{support.description}(APP专享)</span>
                </li>)
              }
            </ul>
          </section>
          <section className='shop-status-container'>
            <Link to='/'>
              <header className='shop-status-header'>
                <span>食品监督安全公示</span>
                <section>
                  <span className='identification_detail'>企业认证详情</span>
                  <ToRight color='#bbb' fontSize='1rem'/>
                </section>
              </header>
            </Link>
            <section className='shop_status_detail'>
              <FrownFill fontSize={46} color='#BF2828'/>
              <section className='check-date'>
                <p>
                  <span>监督检查结果：</span>
                  <span className='shop_status_bad'>差</span>
                </p>
                <p>
                  <span>检查日期：</span>
                  <span>2022-03-24</span>
                </p>
              </section>
            </section>
          </section>
          <section className='shop-status-info'>
            <header>商家信息</header>
            <p>名称：{restaurant.name}</p>
            <p>地址：{restaurant.address}</p>
            <p>营业时间：{restaurant.opening_hours.map(open_hour => open_hour)}</p>
            <p className='shop-certificate'>
              <span>营业执照</span>
              <ToRight color='#bbb' fontSize='1rem'/>
            </p>
            <p className='shop-certificate'>
              <span>餐饮服务许可证</span>
              <ToRight color='#bbb' fontSize='1rem'/>
            </p>
          </section>
        </section>
      </div>
    );
  }
}

export default ShopDetail;
