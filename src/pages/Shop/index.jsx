import React, {Component} from 'react';
import {JumboTabs, SideBar, Tag} from "antd-mobile";
import classNames from 'classnames';
import {ToRight, ToLeft} from "../../components/Iconfonts";
import FoodItem from "../../components/FoodItem";
import './index.scss'

class Shop extends Component {
  state = {
    currentKey: '1'
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
            <section className='shop-content'>
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
            <section className='activity-content'>
              <span><Tag color='danger'>减</Tag> 满30减5，满60减8（APP专享）</span>
              <span>1 个活动 <ToRight/></span>
            </section>
          </section>
        </header>
        <section className='change-showType'>
          <JumboTabs>
            <JumboTabs.Tab title='商品' key='goods'>
              <SideBar activeKey={currentKey} onChange={this.setActiveKey}>
                <SideBar.Item key='1' title='热销榜' style={{'--item-border-radius': '0'}}>热销</SideBar.Item>
                <SideBar.Item key='2' title='折扣榜' style={{'--item-border-radius': '0'}}>折扣</SideBar.Item>
                <SideBar.Item key='3' title='好吃的' style={{'--item-border-radius': '0'}}>好吃</SideBar.Item>
                <SideBar.Item key='4' title='招牌' style={{'--item-border-radius': '0'}}>招牌</SideBar.Item>
                <SideBar.Item key='5' title='测试' style={{'--item-border-radius': '0'}}>测试</SideBar.Item>
                <SideBar.Item key='6' title='5天后' style={{'--item-border-radius': '0'}}>5天后</SideBar.Item>
              </SideBar>
              <div className='sidebar-item-content'>
                <>
                  <FoodItem></FoodItem>
                  <FoodItem></FoodItem>
                  <FoodItem></FoodItem>
                  <FoodItem></FoodItem>
                </>
                {/*<div className={classNames('content', currentKey === '2' && 'active')}>折扣</div>*/}
                {/*<div className={classNames('content', currentKey === '3' && 'active')}>好吃</div>*/}
                {/*<div className={classNames('content', currentKey === '4' && 'active')}>招牌</div>*/}
                {/*<div className={classNames('content', currentKey === '5' && 'active')}>测试</div>*/}
                {/*<div className={classNames('content', currentKey === '6' && 'active')}>5天后</div>*/}
              </div>
            </JumboTabs.Tab>
            <JumboTabs.Tab title='评价' key='assess'>
              西红柿
            </JumboTabs.Tab>
          </JumboTabs>
          <section className='carts-footer'>

          </section>
        </section>
      </div>
    );
  }
}

export default Shop;
