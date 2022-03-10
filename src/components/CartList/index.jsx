import React, {Component} from 'react';
import {connect} from "react-redux";
import {AddBtn, ClearAll, MinusBtn} from "../Iconfonts";
import ACTION_TYPE from "../../redux/constant";
import {clearCart, updateFoodItem} from "../../redux/actions/foodItem";
import './index.scss'

class CartList extends Component {

  // 增加菜品
  addMenu = foodId => {
    return () => {
      const foodItem = this.props.foodItemState.find(food => food.id === foodId)
      foodItem && this.setState({cartFood: [...this.props.foodItemState.filter(food => food.id !== foodId), {...foodItem, count: ++foodItem.count}]}, () => {
        this.props.updateFoodItem(this.props.foodItemState)
      })
    }
  }

  // 减少菜品
  minusMenu = foodId => {
    return () => {
      const foodItem = this.props.foodItemState.find(food => food.id === foodId)
      foodItem && this.setState({cartFood: [...this.props.foodItemState.filter(food => food.id !== foodId), {...foodItem, count: --foodItem.count}]}, () => {
        this.props.updateFoodItem(this.props.foodItemState)
      })
    }
  }

  // 清空购物车
  clear = () => {
    this.props.clearCart([])
  }

  render() {
    const {foodItemState} = this.props
    return (
      <div className="cart-list" style={{display: this.props.cartShow && foodItemState.some(food => food.count > 0)? '': 'none'}}>
        <header>
          <span>购物车</span>
          <span onClick={this.clear}><ClearAll/>清空</span>
        </header>
        <section className='cartFood'>
          <ul>
            {
              foodItemState.map(food => <li key={food.id} style={{display: food.count > 0? '': 'none'}}>
                <div className='cart_list_num'>
                  <p className='ellipsis'>{food.name}</p>
                </div>
                <div className='cart_list_price'>
                  <span>￥</span>
                  <span>{food.price}</span>
                </div>
                <section className='cart_list_control'>
                  <MinusBtn minusMenu={this.minusMenu(food.id)}/>
                  <span>{food.count}</span>
                  <AddBtn addMenu={this.addMenu(food.id)}/>
                </section>
              </li>)
            }
          </ul>
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => state
const mapDispatchToProps = {
  [ACTION_TYPE.UPDATE_FOOD_ITEM]: updateFoodItem,
  [ACTION_TYPE.CLEAR_CART]: clearCart
}
export default connect(mapStateToProps, mapDispatchToProps)(CartList);
