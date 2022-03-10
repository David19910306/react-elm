import React, {Component} from 'react';
import Header from "@/components/Header";
import {ToLeft} from "@/components/Iconfonts";
import {Distance, ToRight} from "../../components/Iconfonts";
import './index.scss'
import {CheckList, Popup, Tag} from "antd-mobile";
import {CheckCircleFill} from "antd-mobile-icons";

class ConfirmOrder extends Component {
  state = {
    clickPayCount: 0, //支付方式点击的次数,控制popup的显示和隐藏
  }
  //支付方式
  clickPay = () => {
    this.setState(state => ({clickPayCount: ++state.clickPayCount}))
  }

  // 点击mask区域关闭popup
  onMaskClick = () => {
    this.setState(state => ({clickPayCount: ++state.clickPayCount}))
  }

  render() {
    const {clickPayCount} = this.state
    return (
      <div className='confirm-order-page'>
        <Header props={this.props} render={() => <ToLeft />} location='确认订单' tips='登录|注册' />
        <section className='order-body'>
          <section className='location-container'>
            <span className='location-icon'><Distance color='#3190e8' fontSize='.85rem' fontWeight='600'/></span>
            <section className='message'>
              <span className='name'>戴义 <span className='phone'>先生 135 0961 3026</span></span>
              <span className='info'><Tag color='danger' style={{'--border-radius': '5px'}}>无</Tag><span className='detail'>二期一栋</span></span>
            </section>
            <span className='add-location'><ToRight color='#999' fontSize='1rem'/></span>
          </section>
          <section className='delivery_model container_style'>
            <p>送达时间</p>
            <section className='send-message'>
              <span>尽快送达 | 预计20：24</span>
              <Tag color='primary'>蜂鸟转送</Tag>
            </section>
          </section>
          <section className='pay_model'>
            <ul>
              <li onClick={this.clickPay}>
                <label>支付方式</label>
                <label className='last-label'>在线支付<ToRight color='#999' fontSize='.8rem'/></label>
              </li>
              <li>
                <label>红包</label>
                <label className='last-label'>暂时只在饿了么APP中支持</label>
              </li>
            </ul>
          </section>
          <section className='order-message'>
            <header>
              <img src='https://elm.cangdu.org/img/17ee6af9df0103580.jpg' alt='商家头像' />
              <span>古茗111</span>
            </header>
            <ul className='food-list'>
              <li>
                <p>鲁班大道112d</p>
                <div className='num_price'>
                  <span>* 1</span>
                  <span>￥ 20</span>
                </div>
              </li>
              <li>
                <p>鲁班大道112d</p>
                <div className='num_price'>
                  <span>* 1</span>
                  <span>￥ 20</span>
                </div>
              </li>
              <li>
                <p>鲁班大道112d</p>
                <div className='num_price'>
                  <span>* 1</span>
                  <span>￥ 20</span>
                </div>
              </li>
              <li>
                <p>鲁班大道112d</p>
                <div className='num_price'>
                  <span>* 1</span>
                  <span>￥ 20</span>
                </div>
              </li>
              <li>
                <p>鲁班大道112d</p>
                <div className='num_price'>
                  <span>* 1</span>
                  <span>￥ 20</span>
                </div>
              </li>
            </ul>
            <div className='food_item_style'>
              <p>餐盒</p>
              <p>￥ 6</p>
            </div>
            <div className='food_item_style'>
              <p>配送费</p>
              <p>￥ 10</p>
            </div>
            <div className='total-price'>
              <span className='order'>订单 ￥2090</span>
              <div className='will-pay'>
                <span>待支付 ￥2090</span>
              </div>
            </div>
          </section>
          <section className='pay_model'>
            <ul>
              <li>
                <label>订单备注</label>
                <label className='last-label'>口味、偏好等<ToRight color='#999' fontSize='.8rem'/></label>
              </li>
              <li>
                <label>发票抬头</label>
                <label className='last-label'>不需要开发票<ToRight color='#999' fontSize='.8rem'/></label>
              </li>
            </ul>
          </section>
        </section>
        <section className='confirm-order'>
          <p>待支付 ￥2118</p>
          <p>确认下单</p>
        </section>
        <Popup visible={clickPayCount % 2 !== 0} onMaskClick={() => this.onMaskClick()} bodyStyle={{height: '10rem'}}>
          <header className='pay-model-onPopup'>支付方式</header>
          <CheckList defaultValue={['onlinePay']} activeIcon={<CheckCircleFill color='#4cd964' />} style={{'--border-bottom': 'none', '--border-inner': 'none'}}>
            <CheckList.Item value='offlinePay' disabled>货到付款（商家不支持货到付款）</CheckList.Item>
            <CheckList.Item value='onlinePay'>在线支付</CheckList.Item>
          </CheckList>
        </Popup>
      </div>
    );
  }
}

export default ConfirmOrder;
