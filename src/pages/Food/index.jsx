import React, {Component} from 'react';
import qs from "qs";
import {Dropdown} from "antd-mobile";
import Header from "@/components/Header";
import {HeaderSearch, ToRight} from "@/components/Iconfonts";
import {restaurantCategory} from "@/api/server.foods";
import './index.scss'


class Food extends Component {
  state= {activeKey: '', title: '', geohash: {}, restaurant_category_id: '', restaurantList: [], restaurant: {}, currentActiveId: 0}
  // 下拉框事件
  onChangeHandler = activeKey => {
    this.setState({activeKey})
  }

  async componentDidMount(){
    const {location: {search}} = this.props
    const {geohash, title, restaurant_category_id} = qs.parse(search.slice(1))
    this.setState({geohash, title, restaurant_category_id})
    // 向后台请求并加载数据
    const result = await restaurantCategory({geohash})
    result.status === 200 && this.setState({restaurantList: result.data})
  }

  // 点击列表获取当前的子菜单
  clickHandler = restaurant => {
    // console.log(restaurant)
    this.setState({restaurant, currentActiveId: restaurant.id})
  }

  render() {
    const {title, restaurantList, restaurant, currentActiveId} = this.state
    return (
      <div className='food-container'>
        <Header
          render={() => <HeaderSearch/>}
          location={title}
        />
        <Dropdown onChange={this.onChangeHandler}>
          <Dropdown.Item key='type' title={this.state.activeKey === 'type'? '分类': title}>
            <div className='category'>
              <section className='category_left'>
                <ul>
                  {
                    restaurantList.map(restaurant =>
                      <li key={restaurant.ids} onClick={() => {this.clickHandler(restaurant)}} className={currentActiveId === restaurant.id? 'active': ''}>
                        <img src={restaurant.image_url?
                          `https://fuss10.elemecdn.com/${restaurant.image_url.slice(0, 1)}/${restaurant.image_url.slice(1,3)}/${restaurant.image_url.slice(3)}.${restaurant.image_url.includes('png')? 'png': 'jpeg'}`
                          :'https://elm.cangdu.org/img/default.jpg'} alt='图标'/>
                        <span className='category_name'>{restaurant.name}</span>
                        <span className='category_count'>{restaurant.count}</span>
                        <ToRight color={'#bbb'} marginLeft={0} fontSize={'.34rem'}/>
                      </li>
                    )
                  }
                </ul>
              </section>
              <section className='category_right'>
                <ul>
                  {
                    restaurant.sub_categories === undefined ? '':
                    restaurant.sub_categories.map(category => category.count !== 0 && (
                      <li key={category.id}> <span>{category.name}</span> <span>{category.count}</span></li>
                    ))
                  }
                </ul>
              </section>
            </div>
          </Dropdown.Item>
          <Dropdown.Item key='sorter' title='排序'>
            <div style={{padding: '12'}}>
              智能排序
              <br/>
              距离最近
              <br/>
              销量最高
              <br/>
              起送价最低
              <br/>
              配送速度最快
              <br/>
              评分最高
            </div>
          </Dropdown.Item>
          <Dropdown.Item key='more' title='刷选'>
            <div style={{padding: '12'}}>
              配送方式
              <br/>
            </div>
          </Dropdown.Item>
        </Dropdown>
      </div>
    );
  }
}

export default Food;
