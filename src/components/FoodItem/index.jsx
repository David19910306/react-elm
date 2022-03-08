import React, {Component} from 'react';
import {Button, Tag} from "antd-mobile";
import './index.scss'
import {AddBtn} from "../Iconfonts";

class FoodItem extends Component {

  componentDidMount(){
    this.props.getItemNode(this.sectionNode)
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
                    <AddBtn/>
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

export default FoodItem;
