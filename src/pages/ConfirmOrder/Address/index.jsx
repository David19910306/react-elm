import React, {Component} from 'react';
import {connect} from "react-redux";
import {Route} from "react-router-dom";
// import PubSub from 'pubsub-js'
import {AddCircleOutline, CheckCircleFill, UserOutline} from "antd-mobile-icons";
import Header from "@/components/Header";
import {Tag} from "antd-mobile";
import {ToLeft} from "@/components/Iconfonts";
import {getAddressList} from "@/api/server.address";
import ACTIONS_TYPE from "@/redux/constant";
import {sendAddress} from "@/redux/actions/address";
import {AddAddress} from "@/router";
import './index.scss'

class ChooseAddress extends Component {
  state = {addresslist: [], activeId: 0}
  // 跳转到编辑地址
  jumpToEditAddr = () => {
    this.props.history.push('/confirmOrder/chooseAddress/addAddress')
  }

  // 挂在万之后请求后台获取收货地址列表
  async componentDidMount() {
    const {user_id} = this.props.userInfo
    const result = await getAddressList({user_id})
    result.status === 200 && this.setState({addresslist: result.data, activeId:result.data[0].id})
  }

  // 选中地址之后天转到订单支付界面
  chooseAddress = address => {
    return () => {
      // 发布信息
      // PubSub.publish('address', address)

      // 定义一个静态的变量存储当前选中的id
      this.setState({activeId: address.id})
      this.props.sendAddress(address)
      this.props.history.go(-1)
    }
  }

  render() {
    return this.props.history.location.pathname.startsWith('/confirmOrder/chooseAddress/addAddress')? <Route path="/confirmOrder/chooseAddress/addAddress" component={AddAddress}/>:
    (
      <div className='address-list'>
        <Header props={this.props} render={() => <ToLeft />} location='选择地址' tips={Object.keys(this.props.userInfo).length === 0? '登录|注册': <UserOutline fontSize={24} style={{marginRight: '.3rem'}} />}/>
        <ul>
          {
            this.state.addresslist.map(address => <li key={address.id} onClick={this.chooseAddress(address)}>
              <CheckCircleFill color='#4cd964' fontSize={20} style={{display: `${this.state.activeId === address.id ? '': 'none'}`}} />
              <section className='message'>
                <span className='name'>{address.name}<span className='phone'>{address.sex === 1? '先生': '女士'} {address.phone}</span></span>
                <span className='info'><Tag color={address.tag === '家'? 'success': address.tag === '学校'? 'primary': address.tag === '公司'? 'warning': 'danger'} style={{'--border-radius': '5px'}}>{address.tag}</Tag><span className='detail'>{address.address_detail}</span></span>
              </section>
            </li>)
          }
        </ul>
        <footer className='addAddressBtn' onClick={this.jumpToEditAddr}>
          <AddCircleOutline fontSize={18} /> <span>新增收货地址</span>
        </footer>
      </div>
    );
  }
}

const mapStateToProps = (state) => state
const mapDispatchToProps = {
  [ACTIONS_TYPE.SEND_ADDRESS]: sendAddress
}
export default connect(mapStateToProps, mapDispatchToProps)(ChooseAddress);
