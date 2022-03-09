import React, {Component} from 'react';
import {JumboTabs, SideBar, Tag} from "antd-mobile";
import qs from "qs";
import {ToRight, ToLeft, Carts} from "../../components/Iconfonts";
import FoodItem from "../../components/FoodItem";
import {foodList, shoppingRestaurant} from "../../api/server.shop";
import './index.scss'
import {connect} from "react-redux";

class Shop extends Component {
  state = {
    restaurant: {},  // 餐馆详情
    foods: [], //食品列表
    scrollHeight: 0, // 点击右侧面板时需要移动的距离
    allSelectMenu: []
  }

  //回退按钮
  goBack = () => {
    this.props.history.go(-1)
  }

  // 切换面板回调
  setActiveTab = (key) =>{
    // const selectTab = this.state.foods.find(food => food.id.toString() === key)
    // console.log(selectTab)
    // this.sideBarNode.scrollTop = this.state.scrollHeight
  }

  getItemNode = node => {
    // console.log(node.offsetHeight, node)
    this.setState({scrollHeight: node.offsetHeight})
  }

  async componentDidMount(){
    const {search} = this.props.location
    const {id} = qs.parse(search.slice(1))
    const response = await shoppingRestaurant(id)
    const result = await foodList({restaurant_id: id})
    this.setState({restaurant: response.data, foods: result.data})
  }

  render() {
    const {restaurant, foods} = this.state;
    return Object.getOwnPropertyNames(restaurant).length === 0? '':
    (
      <div className='shop-container'>
        <header className='shop-header'>
          <nav className='goback' onClick={this.goBack}>
              <ToLeft/>
            </nav>
          <img className='shop-backgroundImg' src={`https://elm.cangdu.org/img/${restaurant.image_path}`} alt='背景图片' />
          <section className='shop-headerContent'>
            <section className='shop-content'>
              <section className='shop-avatar'>
                <img src={`https://elm.cangdu.org/img/${restaurant.image_path}`} alt='商家头像'/>
              </section>
              <section className='shop-message'>
                <h4>{restaurant.name}</h4>
                <span>商家配送 / 分钟配送 / {restaurant.piecewise_agent_fee.tips}</span>
                <span>公告：{restaurant.promotion_info}</span>
              </section>
              <section className='shop-jump'>
                <ToRight color='#fff'/>
              </section>
            </section>
            <section className='activity-content' style={{display: `${restaurant.activities.length === 0? 'none' : ''}`}}>
              <span><Tag color='danger'>{restaurant.activities.length !== 0 && restaurant.activities[0].icon_name}</Tag> {restaurant.activities.length !== 0 && restaurant.activities[0].description}</span>
              <span>{restaurant.activities.length} 个活动 <ToRight/></span>
            </section>
          </section>
        </header>
        <section className='change-showType'>
          <JumboTabs>
            <JumboTabs.Tab title='商品' key='goods'>
              <SideBar onChange={this.setActiveTab}>
                {foods.map(food => <SideBar.Item key={food.id} title={food.name} style={{'--item-border-radius': '0'}}></SideBar.Item>)}
              </SideBar>
              <div className='sidebar-item-content' ref={node => this.sideBarNode = node}>
                {foods.map(food => <FoodItem key={food.id} foodItem={food} getItemNode={this.getItemNode}></FoodItem>)}
              </div>
            </JumboTabs.Tab>
            <JumboTabs.Tab title='评价' key='assess'>
              西红柿
            </JumboTabs.Tab>
          </JumboTabs>
          <section className='carts-footer'>
            <section className='carts-section'>
              <div className='cart_icon_container'>
                <section className='cart_icon'><Carts/></section>
              </div>
              <div className="cart_num">
                <div>¥ 0.00</div>
                <div>配送费¥5</div>
              </div>
            </section>
            <section className='gotopay'>
              <span className="gotopay_button_style">还差¥20起送</span>
            </section>
          </section>
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => state
const mapDispatchToProps = {}
export default connect(mapStateToProps, mapDispatchToProps)(Shop);
