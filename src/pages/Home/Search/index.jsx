import React, {Component} from 'react';
import './index.scss'
import {Tag} from "antd-mobile";
import {getRestaurantsByKeyWord} from "../../../api/server.home";

class Search extends Component {
  state={keyword: '', data: [], visible: false}
  //输入变化事件
  inputChange = event => {
    // console.log(event.target.value);
    this.setState({keyword: event.target.value});
  }
  //按钮提交事件
  Submit = async event => {
    event.preventDefault(); //阻止表单的默认事件
    const {match:{params:{geohash}}} = this.props
    // console.log(geohash)
    //请求后台搜索餐馆列表
    try {
      const response = await getRestaurantsByKeyWord({geohash, keyword: this.state.keyword})
      // console.log(response)
      response.status === 200 && this.setState({data: response.data, visible: true})
    }catch (error){
      console.log(error.message)
    }
  }
  render() {
    // console.log(this.state.data)
    return (
      <div className='search-container'>
        {/* 下面就是一个受控组件*/}
        <form className='searchField'>
          <input className='inputField' type='text' placeholder='请输入商家或美食名称' onChange={this.inputChange}/>
          <input className='inputSubmit' type='submit' value='提交' onClick={this.Submit}/>
        </form>
        <section style={{display: this.state.visible? '': 'none'}}>
          <h4 className='title_restaurant'>商家</h4>
          <ul className='list-container'>
            {
              this.state.data.map(list => (
                <li className='list-li' key={list.id}>
                  <section className='item-left'>
                    <img src={`https://elm.cangdu.org/img/${list.image_path}`} alt='我是图片' className='restaurant_img'/>
                  </section>
                  <section className='item-right'>
                    <div className='item-right-text'>
                      <p>
                        <span style={{color: '#333', marginRight: '.3rem'}}>{list.name}</span><Tag color='#ff6430' fill='outline'>支付</Tag>
                      </p>
                      <p>月售 {list.recent_order_num} 单</p>
                      <p>{list.float_minimum_order_amount} 元起送 / {`距离${list.distance}`}</p>
                    </div>
                    <ul className='item-right-detail'></ul>
                  </section>
                </li>
              ))
            }
          </ul>
        </section>
      </div>
    );
  }
}

export default Search;
