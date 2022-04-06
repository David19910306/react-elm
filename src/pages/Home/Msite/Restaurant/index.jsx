import React, {Component} from 'react';
import Header from "./Header";
import Item from "@/components/ListItem";
import {getRestaurantList} from "@/api/server.home";
import './index.scss'
import {Skeleton} from "@mui/material";

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
    const SkeletonArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,18,19,20]
    return (
      <div className='restaurant'>
        <Header/>
        {
          restaurants.length === 0? SkeletonArray.map(item => <Skeleton key={item} width='95%' height={101.73} style={{margin: '0 auto'}}></Skeleton>):
          restaurants.map(restaurant => <Item key={restaurant.id} {...restaurant}></Item>)
        }
      </div>
    );
  }
}

export default Restaurant;
