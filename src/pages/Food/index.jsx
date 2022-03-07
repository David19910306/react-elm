import React, {Component, createRef} from 'react';
import qs from "qs";
import {Button, Dropdown} from "antd-mobile";
import Header from "@/components/Header";
import {ToLeft, ToRight} from "@/components/Iconfonts";
import {restaurantCategory, specfoods} from "@/api/server.foods";
import MyButton from "@/components/Button";
import ListItem from "@/components/ListItem";
import {Distance, Hit, Price, Sort, Stars, Time, Hook,Check, Ensure, OnlinePay, OnTime, StarStore} from "@/components/Iconfonts";
import './index.scss'

class Food extends Component {
  state= {
    activeKey: '', title: '', geohash: {}, restaurant_category_id: '', restaurantList: [], restaurant: {}, currentActiveId: 0, textContent: [], currentClick: [],
    checkedList: [],
    foodsList: [],
    sub_categoriesId: '',
    clickInnerText: ''
  }
  dropdownRef = createRef()
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
    const response = await specfoods({latitude: geohash.split(',')[0], longitude: geohash.split(',')[1]})
    result.status === 200 && this.setState({restaurantList: result.data, foodsList: response.data})
  }

  // 点击列表获取当前的子菜单
  clickHandler = restaurant => {
    // console.log(restaurant)
    this.setState({restaurant, currentActiveId: restaurant.id})
  }

  //点击按钮clickButtonHandler,配送方式选择
  clickButtonHandler = event => {
    const {textContent} = event.target
    this.setState({textContent: [textContent]})
  }

  //onClickHandle
  onClickHandle = current => {
    this.setState(state => ({currentClick: [current, ...state.currentClick]}))
    !this.state.checkedList.find(checked => checked === current) && this.setState(state => ({checkedList: [current, ...state.checkedList]}))
  }

  //清空按钮
  clear = () => {
    this.setState({checkedList: [], textContent: '', currentClick: []})
    this.dropdownRef.current.close()
  }

  //选中的种类
  categorySelected = async (category) => {
    const {geohash} = this.state
    const result = await specfoods({
      latitude: geohash.split(',')[0],
      longitude: geohash.split(',')[1],
      restaurant_category_ids:[category.id]
    })
    result.status === 200 && this.setState({foodsList: result.data, sub_categoriesId: category.id, title: category.name})
    this.dropdownRef.current.close()
  }

  //排序按钮
  clickSorter = (id) => {
    const {geohash} = this.state
    return async event => {
      const {innerText} = event.target
      const result = await specfoods({
        latitude: geohash.split(',')[0],
        longitude: geohash.split(',')[1],
        restaurant_category_ids:[id],
        order_by: innerText === '距离最近'? 5: innerText === '销量最高'? 6: innerText === '起送价最低'? 1:
          innerText === '配送速度最快'? 2: innerText === '评分最高'? 3: 4
      })
      result.status === 200 && this.setState({clickInnerText: innerText, foodsList: result.data})
      this.dropdownRef.current.close()
    }
  }

  render() {
    const {title, restaurantList, restaurant, currentActiveId, textContent,
      currentClick, checkedList, foodsList, sub_categoriesId,clickInnerText} = this.state
    return (
      <div className='food-container'>
        <Header
          props={this.props}
          render={() => <ToLeft/>}
          location={title}
        />
        <Dropdown onChange={this.onChangeHandler} ref={this.dropdownRef}>
          <Dropdown.Item key='type' title={this.state.activeKey === 'type'? '分类': title}>
            <div className='category'>
              <section className='category_left'>
                <ul>
                  {
                    restaurantList.map(restaurant =>
                      <li key={restaurant.ids} onClick={() => {this.clickHandler(restaurant)}} className={currentActiveId === restaurant.id? 'active': ''}>
                        <img src={restaurant.image_url?
                          `https://fuss10.elemecdn.com/${restaurant.image_url.slice(0, 1)}/${restaurant.image_url.slice(1,3)}/${restaurant.image_url.slice(3)}.${restaurant.image_url.includes('png')? 'png': 'jpeg'}`
                          :'https://elm.cangdu.org/img/default.jpg'} alt={restaurant.name}/>
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
                      <li key={category.id} onClick={() => {this.categorySelected(category)}}>
                        <span className={sub_categoriesId === category.id ? 'active':''}>{category.name}</span>
                        <span className={sub_categoriesId === category.id ? 'active':''}>{category.count}</span>
                      </li>
                    ))
                  }
                </ul>
              </section>
            </div>
          </Dropdown.Item>
          <Dropdown.Item key='sorter' title='排序'>
            <section className='sorter'>
              <ul>
                <li onClick={this.clickSorter(sub_categoriesId)}>
                  <Sort color='#3190e8' fontSize='.7rem'/><p><span>智能排序</span></p>
                  <>{clickInnerText === '智能排序'? <Hook/>: ''}</>
                </li>
                <li onClick={this.clickSorter(sub_categoriesId)}>
                  <Distance color='#3190ee' fontSize='.7rem'/><p><span>距离最近</span></p>
                  {clickInnerText === '距离最近'? <Hook/>: ''}
                </li>
                <li onClick={this.clickSorter(sub_categoriesId)}>
                  <Hit color='#ff6000' fontSize='.7rem'/><p><span>销量最高</span></p>
                  {clickInnerText === '销量最高'? <Hook/>: ''}
                </li>
                <li onClick={this.clickSorter(sub_categoriesId)}>
                  <Price color='#ff9a0d' fontSize='.7rem'/><p><span>起送价最低</span></p>
                  {clickInnerText === '起送价最低'? <Hook/>: ''}
                </li>
                <li onClick={this.clickSorter(sub_categoriesId)}>
                  <Time color='#8aeda2' fontSize='.7rem'/><p><span>速度最快</span></p>
                  {clickInnerText === '速度最快'? <Hook/>: ''}
                </li>
                <li onClick={this.clickSorter(sub_categoriesId)}>
                  <Stars color='#ff9a00' fontSize='.7rem'/><p><span>评分最高</span></p>
                  {clickInnerText === '评分最高'? <Hook/>: ''}
                </li>
              </ul>
            </section>
          </Dropdown.Item>
          <Dropdown.Item key='more' title='刷选'>
            <section className='filter'>
              <section className='more'>
                <p>配送方式</p>
                <section className='method'>
                  <Button className={textContent[0] === '不限'? 'activeButton': ''} onClick={this.clickButtonHandler}><Hook display={textContent[0] === '不限'? '': 'none'}/>不限</Button>
                  <Button className={textContent[0] === '蜂鸟专送'? 'activeButton': ''} onClick={this.clickButtonHandler}><Hook display={textContent[0] === '蜂鸟专送'? '': 'none'}/>蜂鸟专送</Button>
                </section>
              </section>
              <section className='store'>
                <p>商家属性 (可以多选)</p>
                <section className='props'>
                  <MyButton currentText='品牌商家' currentClick={currentClick} render={() => <StarStore display={currentClick.length !== 0 && currentClick.find(current => current === '品牌商家')? 'none': ''} />} onClickHandle={this.onClickHandle}/>
                  <MyButton currentText='外卖保' currentClick={currentClick} render={() => <Ensure display={currentClick.find(current => current === '外卖保')? 'none': ''} />} onClickHandle={this.onClickHandle}/>
                  <MyButton currentText='开发票' currentClick={currentClick} render={() => <Check display={currentClick.find(current => current === '开发票')? 'none': ''} />} onClickHandle={this.onClickHandle}/>
                  <MyButton currentText='在线支付' currentClick={currentClick} render={() => <OnlinePay display={currentClick.find(current => current === '在线支付')? 'none': ''} />} onClickHandle={this.onClickHandle}/>
                  <MyButton currentText='准时达' currentClick={currentClick} render={() => <OnTime display={currentClick.find(current => current === '准时达')? 'none': ''} />} onClickHandle={this.onClickHandle}/>
                </section>
              </section>
            </section>
            <section className='bottomButton'>
              <Button style={{'--background-color': '#fff', padding: '.3rem 2.75rem'}} onClick={this.clear}>清空</Button>
              <Button style={{'--background-color': '#76C97C', '--text-color': '#fff', padding: '.3rem 2.75rem'}}>
                {`确定${checkedList.length !== 0 || textContent.length !== 0? `(${checkedList.length + textContent.length})`: ''}`}
              </Button>
            </section>
          </Dropdown.Item>
        </Dropdown>
        <section className='list-container'>
          {
            foodsList.map(restaurant => <ListItem key={restaurant.id} {...restaurant}></ListItem>)
          }
        </section>
      </div>
    );
  }
}

export default Food;
