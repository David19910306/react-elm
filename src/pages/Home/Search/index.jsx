import React, {Component} from 'react';
import './index.scss'
import {Tag} from "antd-mobile";
import {getRestaurantsByKeyWord} from "../../../api/server.home";

class Search extends Component {
  state={keyword: ''}
  //输入变化事件
  inputChange = event => {
    // console.log(event.target.value);
    this.setState({keyword: event.target.value});
  }
  //按钮提交事件
  Submit = event => {
    event.preventDefault(); //阻止表单的默认事件
    console.log(this.state.keyword);
    //请求后台搜索餐馆列表
    try {
      const response = getRestaurantsByKeyWord({geohash: '', keyword: this.state.keyword})
    }catch (error){
      console.log(error.message)
    }
  }
  render() {
    return (
      <div className='search-container'>
        {/* 下面就是一个受控组件*/}
        <form className='searchField'>
          <input className='inputField' type='text' placeholder='请输入商家或美食名称' onChange={this.inputChange}/>
          <input className='inputSubmit' type='submit' value='提交' onClick={this.Submit}/>
        </form>
        <section>
          <h4 className='title_restaurant'>商家</h4>
          <ul className='list-container'>
            <li className='list-li'>
              <section className='item-left'>
                <img src='https://elm.cangdu.org/img/17d9ada8d0e102421.jpg' alt='我是图片' className='restaurant_img'/>
              </section>
              <section className='item-right'>
                <div className='item-right-text'>
                  <p>
                    <span style={{color: '#333', marginRight: '.3rem'}}>aaa是事实上司是，我是测试十四号似乎s</span><Tag color='#ff6430' fill='outline'>支付</Tag>
                  </p>
                  <p>月售 601 单</p>
                  <p>5 元起送 / 距离759.3公里</p>
                </div>
                <ul className='item-right-detail'></ul>
              </section>
            </li>
            <li className='list-li'>
              <section className='item-left'>
                <img src='https://elm.cangdu.org/img/17d9ada8d0e102421.jpg' alt='我是图片' className='restaurant_img'/>
              </section>
              <section className='item-right'>
                <div className='item-right-text'>
                  <p>
                    <span style={{color: '#333', marginRight: '.3rem'}}>aaa是事实上司是，我是测试十四号似乎s</span><Tag color='#ff6430' fill='outline'>支付</Tag>
                  </p>
                  <p>月售 601 单</p>
                  <p>5 元起送 / 距离759.3公里</p>
                </div>
                <ul className='item-right-detail'></ul>
              </section>
            </li>
            <li className='list-li'>
              <section className='item-left'>
                <img src='https://elm.cangdu.org/img/17d9ada8d0e102421.jpg' alt='我是图片' className='restaurant_img'/>
              </section>
              <section className='item-right'>
                <div className='item-right-text'>
                  <p>
                    <span style={{color: '#333', marginRight: '.3rem'}}>aaa是事实上司是，我是测试十四号似乎s</span><Tag color='#ff6430' fill='outline'>支付</Tag>
                  </p>
                  <p>月售 601 单</p>
                  <p>5 元起送 / 距离759.3公里</p>
                </div>
                <ul className='item-right-detail'></ul>
              </section>
            </li>
            <li className='list-li'>
              <section className='item-left'>
                <img src='https://elm.cangdu.org/img/17d9ada8d0e102421.jpg' alt='我是图片' className='restaurant_img'/>
              </section>
              <section className='item-right'>
                <div className='item-right-text'>
                  <p>
                    <span style={{color: '#333', marginRight: '.3rem'}}>aaa是事实上司是，我是测试十四号似乎s</span><Tag color='#ff6430' fill='outline'>支付</Tag>
                  </p>
                  <p>月售 601 单</p>
                  <p>5 元起送 / 距离759.3公里</p>
                </div>
                <ul className='item-right-detail'></ul>
              </section>
            </li>
            <li className='list-li'>
              <section className='item-left'>
                <img src='https://elm.cangdu.org/img/17d9ada8d0e102421.jpg' alt='我是图片' className='restaurant_img'/>
              </section>
              <section className='item-right'>
                <div className='item-right-text'>
                  <p>
                    <span style={{color: '#333', marginRight: '.3rem'}}>aaa是事实上司是，我是测试十四号似乎s</span><Tag color='#ff6430' fill='outline'>支付</Tag>
                  </p>
                  <p>月售 601 单</p>
                  <p>5 元起送 / 距离759.3公里</p>
                </div>
                <ul className='item-right-detail'></ul>
              </section>
            </li>
            <li className='list-li'>
              <section className='item-left'>
                <img src='https://elm.cangdu.org/img/17d9ada8d0e102421.jpg' alt='我是图片' className='restaurant_img'/>
              </section>
              <section className='item-right'>
                <div className='item-right-text'>
                  <p>
                    <span style={{color: '#333', marginRight: '.3rem'}}>aaa是事实上司是，我是测试十四号似乎s</span><Tag color='#ff6430' fill='outline'>支付</Tag>
                  </p>
                  <p>月售 601 单</p>
                  <p>5 元起送 / 距离759.3公里</p>
                </div>
                <ul className='item-right-detail'></ul>
              </section>
            </li>
            <li className='list-li'>
              <section className='item-left'>
                <img src='https://elm.cangdu.org/img/17d9ada8d0e102421.jpg' alt='我是图片' className='restaurant_img'/>
              </section>
              <section className='item-right'>
                <div className='item-right-text'>
                  <p>
                    <span style={{color: '#333', marginRight: '.3rem'}}>aaa是事实上司是，我是测试十四号似乎s</span><Tag color='#ff6430' fill='outline'>支付</Tag>
                  </p>
                  <p>月售 601 单</p>
                  <p>5 元起送 / 距离759.3公里</p>
                </div>
                <ul className='item-right-detail'></ul>
              </section>
            </li>
            <li className='list-li'>
              <section className='item-left'>
                <img src='https://elm.cangdu.org/img/17d9ada8d0e102421.jpg' alt='我是图片' className='restaurant_img'/>
              </section>
              <section className='item-right'>
                <div className='item-right-text'>
                  <p>
                    <span style={{color: '#333', marginRight: '.3rem'}}>aaa是事实上司是，我是测试十四号似乎s</span><Tag color='#ff6430' fill='outline'>支付</Tag>
                  </p>
                  <p>月售 601 单</p>
                  <p>5 元起送 / 距离759.3公里</p>
                </div>
                <ul className='item-right-detail'></ul>
              </section>
            </li>
            <li className='list-li'>
              <section className='item-left'>
                <img src='https://elm.cangdu.org/img/17d9ada8d0e102421.jpg' alt='我是图片' className='restaurant_img'/>
              </section>
              <section className='item-right'>
                <div className='item-right-text'>
                  <p>
                    <span style={{color: '#333', marginRight: '.3rem'}}>aaa是事实上司是，我是测试十四号似乎s</span><Tag color='#ff6430' fill='outline'>支付</Tag>
                  </p>
                  <p>月售 601 单</p>
                  <p>5 元起送 / 距离759.3公里</p>
                </div>
                <ul className='item-right-detail'></ul>
              </section>
            </li>
            <li className='list-li'>
            <section className='item-left'>
              <img src='https://elm.cangdu.org/img/17d9ada8d0e102421.jpg' alt='我是图片' className='restaurant_img'/>
            </section>
            <section className='item-right'>
              <div className='item-right-text'>
                <p>
                  <span style={{color: '#333', marginRight: '.3rem'}}>aaa是事实上司是，我是测试十四号似乎s</span><Tag color='#ff6430' fill='outline'>支付</Tag>
                </p>
                <p>月售 601 单</p>
                <p>5 元起送 / 距离759.3公里</p>
              </div>
              <ul className='item-right-detail'></ul>
            </section>
          </li>
            <li className='list-li'>
              <section className='item-left'>
                <img src='https://elm.cangdu.org/img/17d9ada8d0e102421.jpg' alt='我是图片' className='restaurant_img'/>
              </section>
              <section className='item-right'>
                <div className='item-right-text'>
                  <p>
                    <span style={{color: '#333', marginRight: '.3rem'}}>aaa是事实上司是，我是测试十四号似乎s</span><Tag color='#ff6430' fill='outline'>支付</Tag>
                  </p>
                  <p>月售 601 单</p>
                  <p>5 元起送 / 距离759.3公里</p>
                </div>
                <ul className='item-right-detail'></ul>
              </section>
            </li>
          </ul>
        </section>
      </div>
    );
  }
}

export default Search;
