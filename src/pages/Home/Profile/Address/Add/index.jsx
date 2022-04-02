import React, {Component} from 'react';
import './index.scss'
import {Modal} from "antd-mobile";
import {addAddress} from "../../../../../api/server.login";
import {connect} from "react-redux";

class Add extends Component {

  state = {form: {tag: '公司', tag_type: 4, sex: 1, poi_type: 0}} // 表单提交事件

  // 表单输入事件
  setInputValue = event => {
    // console.log(event)
    this.setState(state => ({form: {[event.target.name]: event.target.value, ...state.form}}))
  }

  // 按钮点击事件，新增地址
  submitHandler = async event => {
    event.preventDefault(); // 阻止表单默认提交
    if (Object.keys(this.state.form).length === 0) {
      Modal.alert({content: '请补充完整地址信息', onConfirm: () => {console.log('Confirm')}})
    }
    const result = await addAddress({user_id: this.props.userInfo.user_id, ...this.state.form, geohash: this.props.home})
    // console.log(result)
    if (result.data.status === 1) this.props.history.go(-1)
  }

  render() {
    return (
      <div className='add-new-address'>
        <form>
          <section className="ui-padding-block">
            <div className="input-new"><input type="text" placeholder="请填写你的姓名" name='name' onInput={this.setInputValue}/></div>
            <div className="input-new"><input type="text" placeholder="小区/写字楼/学校等" name='address' onInput={this.setInputValue}/></div>
            <div className="input-new"><input type="text" placeholder="请填写详细送餐地址" name='address_detail' onInput={this.setInputValue}/></div>
            <div className="input-new"><input type="text" placeholder="请填写能够联系到您的手机号" name='phone' onInput={this.setInputValue}/></div>
            <div className="input-new"><input type="text" placeholder="备用联系电话（选填）" name='phone_bk' onInput={this.setInputValue}/></div>
          </section>
          <section className="addbutton" onClick={this.submitHandler}>
            <button>新增地址</button>
          </section>
        </form>
      </div>
    );
  }
}

export default connect(state => state, {})(Add);
