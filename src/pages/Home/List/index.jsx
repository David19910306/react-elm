import React, {Component} from 'react';
import {connect} from "react-redux";
import {orderList} from "@/api/server.order";
import Order from "@/components/Order";
import './index.scss'

class List extends Component {

  state = {orders: []}

  // 获取订单信息
  async componentDidMount(){
    if (this.props.userInfo.user_id === undefined) return
    const response = await orderList({user_id: this.props.userInfo.user_id, limit: 10, offset: 0});
    response.status === 200 && this.setState({orders: response.data})
  }

  render() {
    const {orders} = this.state
    return (
      <div className='order_page'>
        {
          orders.map(order => <Order key={order._id} {...order}/>)
        }
      </div>
    );
  }
}

const mapStateToProps = state => state
export default connect(mapStateToProps, {})(List);
