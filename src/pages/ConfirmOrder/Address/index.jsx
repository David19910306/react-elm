import React, {Component} from 'react';
import {connect} from "react-redux";
import {AddCircleOutline, CheckCircleFill} from "antd-mobile-icons";
import Header from "@/components/Header";
import {Tag} from "antd-mobile";
import {ToLeft} from "@/components/Iconfonts";
import {getAddressList} from "@/api/server.address";
import {Route} from "react-router-dom";
import {AddAddress} from "@/router";
import './index.scss'

class ChooseAddress extends Component {
  state = {addresslist: []}
  // 跳转到编辑地址
  jumpToEditAddr = () => {
    this.props.history.push('/confirmOrder/chooseAddress/addAddress')
  }

  // 挂在万之后请求后台获取收货地址列表
  async componentDidMount() {
    const {user_id} = this.props.userInfo
    const result = await getAddressList({user_id})
    result.status === 200 && this.setState({addresslist: result.data})
  }

  render() {
    return this.props.history.location.pathname.startsWith('/confirmOrder/chooseAddress/addAddress')? <Route path="/confirmOrder/chooseAddress/addAddress" component={AddAddress}/>:
    (
      <div className='address-list'>
        <Header props={this.props} render={() => <ToLeft />} location='选择地址' tips='登录|注册'/>
        <ul>
          {
            this.state.addresslist.map(address => <li key={address.id}>
              <CheckCircleFill color='#4cd964' fontSize={20} />
              <section className='message'>
                <span className='name'>{address.name}<span className='phone'>{address.sex === 1? '先生': '女士'} {address.phone}</span></span>
                <span className='info'><Tag color='danger' style={{'--border-radius': '5px'}}>{address.tag}</Tag><span className='detail'>{address.address_detail}</span></span>
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
const mapDispatchToProps = {}
export default connect(mapStateToProps, mapDispatchToProps)(ChooseAddress);
