import React, {Component} from 'react';
import {ToRight} from "../Iconfonts";
import {Button} from "antd-mobile";
import './index.scss'

class Order extends Component {
  render() {
    const {restaurant_name, restaurant_image_url, formatted_created_at, total_amount, basket, pay_remain_seconds} = this.props
    return (
      <div className='order-list'>
        <section className='order-title'>
          <section className='left'>
            <img src={`https://elm.cangdu.org/img/${restaurant_image_url}`} />
            <section className='title'>
              <p>{restaurant_name}<ToRight/> </p>
              <span>{formatted_created_at}</span>
            </section>
          </section>
          <section className='right'>{pay_remain_seconds === 0? `支付超时`: `还剩${pay_remain_seconds}秒`}</section>
        </section>
        <section className='order-price'>
          <span>{`${basket.group[0][0].name} 等${basket.group.reduce((prev, curr) => prev + curr.length, 0)}件商品`}</span>
          <span>￥{total_amount}</span>
        </section>
        <section className='more-list'>
          <Button color='primary' fill='outline' size='mini'>再来一单</Button>
        </section>
      </div>
    );
  }
}

export default Order;
