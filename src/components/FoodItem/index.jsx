import React, {Component} from 'react';
import {connect} from "react-redux";
import {Button, Tag} from "antd-mobile";
import {AddBtn, MinusBtn} from "../Iconfonts";
import ACTION_TYPE from "@/redux/constant";
import {foodItem} from "@/redux/actions/foodItem";
import './index.scss'

class FoodItem extends Component {

  state = {
    orderMenus: [] // 选中的菜品
  }

  componentDidMount(){
    this.props.getItemNode(this.sectionNode)
  }

  // 添加菜单
  addMenu = food => {
    console.log(food, this.props)
    let count = 0
    const menu = this.state.orderMenus.find(menu => menu.id === food.item_id)
    menu? this.setState({orderMenus: [{count: ++menu.count, ...menu}, ...this.state.orderMenus.filter(menu => menu.id !== food.item_id)]}, () => {
      this.props.foodItemState(...this.state.orderMenus)
    }): this.setState({orderMenus:[{name:food.name, price: food.specfoods[0].price, id: food.item_id, count: ++count}, ...this.state.orderMenus]}, () => {
      this.props.foodItemState(...this.state.orderMenus)
    })

    // if (menu){
    //   this.setState({orderMenus: [{count: ++menu.count, ...menu}, ...this.state.orderMenus.filter(menu => menu.id !== food.item_id)]}, () => {
    //     console.log(this.state.orderMenus)
    //   })
    // }else{
    //   // this.setState({orderMenus:[{name:food.name, price: food.specfoods[0].price, id: food.item_id, count: ++count}, ...this.state.orderMenus]})
    //   this.setState(state=> {
    //     return {orderMenus:[{name:food.name, price: food.specfoods[0].price, id: food.item_id, count: ++count}, ...state.orderMenus]}
    //   }, () => {
    //     console.log(this.state.orderMenus)
    //   })
    // }
  }

  render() {
    // console.log(this.props)
    const {foodItem} = this.props
    return (
      <section className='item-list' ref={node => this.sectionNode = node}>
        <header><strong>{foodItem.name}</strong><span>{foodItem.description}</span></header>
        {
          foodItem.foods.map(food => <section key={food.item_id} className='list-content'>
            <section className='menu_detail_link'>
              <section className="menu_food_img"><img src={`https://elm.cangdu.org/img/${food.image_path}`} /></section>
              <section className="menu_food_description">
                <h3 className='food_description_head'>
                  <strong className='description_foodname'>{food.name}</strong>
                  <ul className='attributes_ul' style={{display: `${food.attributes.find(f => f && f.icon_name==='新')? '': 'none'}`}}>
                    <li className="attribute_new" style={{color: "rgb(94, 196, 82)", borderColor: "rgb(94, 196, 82)"}}>
                      <p style={{color: "#fff"}}>新品</p>
                    </li>
                  </ul>
                  <Tag color='danger' fill='outline' round style={{display: `${food.attributes.find(f => f && f.icon_name==='招牌')? '': 'none'}`}}>招牌</Tag>
                </h3>
                <p className='food_description_content'>{food.description}</p>
                <p className="food_description_sale_rating">
                  <span>月售{food.month_sales}份</span> <span data-v-c8684834="">好评率{food.satisfy_rate}</span>
                </p>
                <p className="food_activity">
                  <span style={{color: `#${food.activity && food.activity.icon_color}`, borderColor: `#${food.activity &&food.activity.image_text_color}`}}>{food.activity && food.activity.image_text}</span>
                </p>
              </section>
            </section>
            <footer className='menu_detail_footer'>
              <section className="food_price">
                <span >¥</span> <span>{food.specfoods[0].price}</span> <span >起</span>
              </section>
              {
                food.specifications.length > 0 ?
                (<section className='cart-module'>
                  <Button size='mini' color='primary'>选规格</Button>
                </section>): (
                  <section className='cart-module'>
                    <MinusBtn display='none'/><span style={{display: 'none'}}>1</span><AddBtn addMenu={() => {this.addMenu(food)}}/>
                  </section>
                )
              }
            </footer>
          </section>)
        }
      </section>
    );
  }
}

const mapStateToProps = state => state
const mapDispatchToProps = {
  [ACTION_TYPE.FOOD_ITEM_STATE]: foodItem
}
export default connect(mapStateToProps, mapDispatchToProps)(FoodItem);
