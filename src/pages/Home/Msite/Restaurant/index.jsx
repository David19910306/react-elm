import React, {Component} from 'react';
import Header from "./Header";
import Item from "./Item";
import './index.css'
import {getRestaurantList} from "@/api/server.home";

class Restaurant extends Component {
  state={restaurants: []}

  //请求后台数据展示到页面
  async componentDidMount() {
    try{
      const result = await getRestaurantList({latitude:22.54369,longitude:114.038418})
      // console.log(result)
      result.status === 200 && this.setState({restaurants: result.data})
    }catch (e){
      console.log(e.message)
    }
  }

  render() {
    const {restaurants} = this.state
    if (restaurants.length === 0) return null
    return (
      <div className='restaurant'>
        <Header/>
        {
          this.state.restaurants.map(restaurant => <Item key={restaurant.id} {...restaurant}></Item>)
        }
      </div>
    );
  }
}

export default Restaurant;
