import React, {Component} from 'react';
import qs from "qs";
import {connect} from "react-redux";
import {Route} from "react-router-dom";
// import PubSub from 'pubsub-js'
import {CheckList, Popup, Tag} from "antd-mobile";
import {CheckCircleFill, UserOutline} from "antd-mobile-icons";
import Header from "@/components/Header";
import {ToLeft} from "@/components/Iconfonts";
import {Distance, ToRight} from "@/components/Iconfonts";
import {checkOut} from "@/api/server.confirm";
import {Address, Payment} from "@/router";
import './index.scss'

class ConfirmOrder extends Component {
  state = {
    clickPayCount: 0, //支付方式点击的次数,控制popup的显示和隐藏
    checkout: {} // 返回购物车信息
  }
  //支付方式
  clickPay = () => {
    this.setState(state => ({clickPayCount: ++state.clickPayCount}))
  }

  // 点击mask区域关闭popup
  onMaskClick = () => {
    this.setState(state => ({clickPayCount: ++state.clickPayCount}))
  }

  async componentDidMount() {
    // 订阅传过来的地址信息
    // this.tokens = PubSub.subscribe('address', (_, data) => {
    //   console.log(data)
    //   this.setState({address:data})
    // })

    const {search} = this.props.location
    const {shopId, geohash} = qs.parse(search.slice(1))
    //specs: ['']先暂时这位空数组，后续将选规格的商品完善之后在修改这里
    const entities = this.props.foodItemState.map(food => ({attrs:[], extra: {}, id: food.id, name: food.name,packing_fee:0, price:food.price, quantity:food.count, sku_id: food.id, specs: [''], stock: 1000}))
    // 加入购物车
    const checkedResult = await checkOut({restaurant_id: shopId, geohash, entities: [entities] })
    checkedResult.status === 200 && this.setState({checkout: checkedResult.data})
  }

  //组件将要卸载时取消订阅
  // componentWillUnmount() {
  //   PubSub.unsubscribe(this.tokens)
  // }

  // 跳转到地址界面
  jumpToAddress = () => {
    this.props.history.push('/confirmOrder/chooseAddress')
  }

  // 跳转到下单界面
  payments = () => {
    this.props.history.push('/confirmOrder/payment')
  }

  render() {
    const {clickPayCount, checkout, checkout:{cart}} = this.state
    const {address} = this.props
    return Object.keys(checkout).length === 0 || cart === undefined? <></>:
    this.props.history.location.pathname.startsWith('/confirmOrder/chooseAddress')? <Route path='/confirmOrder/chooseAddress' component={Address}/>: this.props.history.location.pathname.startsWith('/confirmOrder/payment')?
      <Route path='/confirmOrder/payment' component={Payment}/>
      : <div className='confirm-order-page'>
          <Header props={this.props} render={() => <ToLeft />} location='确认订单' tips={Object.keys(this.props.userInfo).length === 0? '登录|注册': <UserOutline fontSize={24} style={{marginRight: '.3rem'}} />} />
          <section className='order-body'>
            <section className='location-container' onClick={this.jumpToAddress}>
              <span className='location-icon'><Distance color='#3190e8' fontSize='.85rem' fontWeight='600'/></span>
              <section className='message'>
                <span className='name'>{address.name} <span className='phone'>{address.sex === 1? '先生': '女士'} {address.phone_bk}</span></span>
                <span className='info'><Tag color={address.tag === '家'? 'success': address.tag === '学校'? 'primary': address.tag === '公司'? 'warning': 'danger'} style={{'--border-radius': '5px'}}>{address.tag}</Tag><span className='detail'>{address.address_detail}</span></span>
              </section>
              <span className='add-location'><ToRight color='#999' fontSize='1rem'/></span>
            </section>
            <section className='delivery_model container_style'>
              <p>送达时间</p>
              <section className='send-message'>
                <span>尽快送达 | 预计 {checkout.delivery_reach_time}</span>
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
                <img src={`https://elm.cangdu.org/img/${cart.restaurant_info.image_path}`} alt='商家头像' />
                <span>{cart.restaurant_info.name}</span>
              </header>
              <ul className='food-list'>
                {
                  cart.groups.map(group => group.map(order => <li key={order._id}>
                    <p>{order.name}</p>
                    <div className='num_price'>
                      <span>* {order.quantity}</span>
                      <span>￥ {order.price}</span>
                    </div>
                  </li>))
                }
              </ul>
              {
                cart.extra.map(ex => <div key={ex._id} className='food_item_style'>
                  <p>{ex.name}</p>
                  <p>￥ {ex.price}</p>
                </div>)
              }
              <div className='food_item_style'>
                <p>配送费</p>
                <p>￥ {cart.deliver_amount}</p>
              </div>
              <div className='total-price'>
              <span className='order'>
                {`订单 ￥${cart.groups.reduce((prev, curr) => prev + curr.reduce((previous, current) => previous + current.price * current.quantity, 0), 0) + cart.deliver_amount + cart.extra.reduce((prev, curr) => prev + curr.price, 0)}`}
              </span>
                <div className='will-pay'>
                <span>
                  {`待支付 ￥${cart.groups.reduce((prev, curr) => prev + curr.reduce((previous, current) => previous + current.price * current.quantity, 0), 0) + cart.deliver_amount + cart.extra.reduce((prev, curr) => prev + curr.price, 0)}`}
                </span>
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
                  <label className='last-label'>{checkout.invoice.status_text}<ToRight color='#999' fontSize='.8rem'/></label>
                </li>
              </ul>
            </section>
          </section>
          <section className='confirm-order'>
            <p>{`待支付 ￥${cart.groups.reduce((prev, curr) => prev + curr.reduce((previous, current) => previous + current.price * current.quantity, 0), 0) + cart.deliver_amount + cart.extra.reduce((prev, curr) => prev + curr.price, 0)}`}</p>
            <p onClick={this.payments}>确认下单</p>
          </section>
          <Popup visible={clickPayCount % 2 !== 0} onMaskClick={() => this.onMaskClick()} bodyStyle={{height: '10rem'}}>
            <header className='pay-model-onPopup'>支付方式</header>
            <CheckList defaultValue={[1]} activeIcon={<CheckCircleFill color='#4cd964' />} style={{'--border-bottom': 'none', '--border-inner': 'none'}}>
              {
                checkout.payments.map(pay => <CheckList.Item value={pay.id} key={pay._id} disabled={!pay.is_online_payment}>{`${pay.name} ${pay.description}`}</CheckList.Item>)
              }
            </CheckList>
          </Popup>
        </div>
  }
}

const mapStateToProps = state => state
export default connect(mapStateToProps, {})(ConfirmOrder);
