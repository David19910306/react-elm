import React, {Component} from 'react';
import './index.scss'
import {Link} from "react-router-dom";
import {ToRight} from "@/components/Iconfonts";
import {addressList} from "@/api/server.login";
import {connect} from "react-redux";
import {CloseOutline} from "antd-mobile-icons";
import PubSub from 'pubsub-js'
import {delAddress} from "../../../../api/server.login";

class Address extends Component {

  state = {addressList: [], editable: false}

  // 请求后台的地址列表
  getAddress = async () => {
    const address = await addressList({user_id: this.props.userInfo.user_id});
    // console.log(address)
    this.setState({addressList: address.data})
  }

  // 请求后台获取数据
  async componentDidMount(){
    await this.getAddress()

    // 订阅消息
    this.token = PubSub.subscribe('delAddress', (_, data) => {
      // console.log('Address', data)
      this.setState({editable: data})
    })
  }

  componentWillUnmount() {
    // 取消订阅
    PubSub.unsubscribe(this.token)
  }

  // 删除地址
  delAddress = (delId) => {
    return async () => {
      const deleteResult = await delAddress({user_id: this.props.userInfo.user_id, address_id: delId})
      console.log(deleteResult)
      const {data} = deleteResult
      data.status === 1 && await this.getAddress()
    }
  }

  render() {
    const {addressList, editable} = this.state
    return (
      <div className='edit-address'>
        <ul className='addressList'>
          {
            addressList.map(address => <li key={address.id}>
              <div>
                <p>{address.address}</p>
                <p><span>{address.phone}</span></p>
              </div>
              <CloseOutline style={{display: `${editable? '': 'none'}`}} onClick={this.delAddress(address.id)} />
            </li>)
          }
        </ul>
        <Link to='/home/mine/info/address/add'>
          <div className="addsite">
            <span>新增地址</span>
            <ToRight color='#D8D8D8' fontSize='1.1rem' />
          </div>
        </Link>
      </div>
    );
  }
}

export default connect(state => state, {})(Address);
