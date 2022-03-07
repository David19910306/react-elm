import React, {Component} from 'react';
import {JumboTabs, SideBar} from "antd-mobile";
import classNames from 'classnames';
import {ToRight, ToLeft} from "../../components/Iconfonts";
import './index.scss'

class Shop extends Component {
  state = {
    currentKey: ''
  }

  // 选项卡切换
  setActiveKey = key => {
    this.setState({currentKey: key})
  }

  render() {
    const {currentKey} = this.state;
    return (
      <div className='shop-container'>
        <header className='shop-header'>
          <nav className='goback'>
            <ToLeft/>
          </nav>
          <img className='shop-backgroundImg' src='https://elm.cangdu.org/img/164ad0b6a3917599.jpg' alt='背景图片' />
          <section className='shop-headerContent'>
            <section className='shop-avatar'>
              <img src='https://elm.cangdu.org/img/164ad0b6a3917599.jpg' alt='商家头像'/>
            </section>
            <section className='shop-message'>
              <h4>效果演示</h4>
              <span>商家配送 / 分钟配送 / 配送费￥5</span>
              <span>公告：欢迎光临，用餐高峰期请提前下单，谢谢用餐高峰期请提前下单</span>
            </section>
            <section className='shop-jump'>
              <ToRight color='#fff'/>
            </section>
          </section>
        </header>
        <section className='change-showType'>
          <JumboTabs>
            <JumboTabs.Tab title='商品' key='goods'>
              <SideBar activeKey={currentKey} onChange={this.setActiveKey}>
                <SideBar.Item key='1' title='1'>1</SideBar.Item>
                <SideBar.Item key='2' title='2'>2</SideBar.Item>
                <SideBar.Item key='3' title='3'>3</SideBar.Item>
              </SideBar>
              <div className='sidebar-item-content'>
                <div className={classNames('content', currentKey === '1' && 'active')}>页面221</div>
                <div className={classNames('content', currentKey === '2' && 'active')}>页面222</div>
                <div className={classNames('content', currentKey === '3' && 'active')}>页面223</div>
              </div>
            </JumboTabs.Tab>
            <JumboTabs.Tab title='评价' key='assess'>
              西红柿
            </JumboTabs.Tab>
          </JumboTabs>
        </section>
      </div>
    );
  }
}

export default Shop;
