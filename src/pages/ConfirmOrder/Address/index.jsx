import React, {Component} from 'react';
import {AddCircleOutline, CheckCircleFill} from "antd-mobile-icons";
import Header from "@/components/Header";
import {Tag} from "antd-mobile";
import {ToLeft} from "@/components/Iconfonts";
import {Route} from "react-router-dom";
import {AddAddress} from "@/router";
import './index.scss'

class ChooseAddress extends Component {

  // 跳转到编辑地址
  jumpToEditAddr = () => {
    this.props.history.push('/confirmOrder/chooseAddress/addAddress')
  }

  render() {
    return this.props.history.location.pathname.startsWith('/confirmOrder/chooseAddress/addAddress')? <Route path="/confirmOrder/chooseAddress/addAddress" component={AddAddress}/>:
    (
      <div className='address-list'>
        <Header props={this.props} render={() => <ToLeft />} location='选择地址' tips='登录|注册'/>
        <ul>
          <li>
            <CheckCircleFill color='#4cd964' fontSize={20} />
            <section className='message'>
              <span className='name'>戴义 <span className='phone'>先生 135 0961 3026</span></span>
              <span className='info'><Tag color='danger' style={{'--border-radius': '5px'}}>无</Tag><span className='detail'>二期一栋</span></span>
            </section>
          </li>
        </ul>
        <footer className='addAddressBtn' onClick={this.jumpToEditAddr}>
          <AddCircleOutline fontSize={18} /> <span>新增收货地址</span>
        </footer>
      </div>
    );
  }
}

export default ChooseAddress;
