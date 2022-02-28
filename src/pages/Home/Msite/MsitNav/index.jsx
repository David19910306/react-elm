import React, {Component} from 'react';
import msitNavStyle from './index.module.css'
import {Swiper} from "antd-mobile";
import {getNavigationList} from "@/api/server.home";
import {Link} from "react-router-dom";
import {connect} from "react-redux";

const {Item} = Swiper
class MsitNav extends Component {

  state = {mistList: []}
  async componentDidMount() {
    try{
      //请求后台数据
      const result = await getNavigationList({})
      this.setState({mistList: result.data})
    }catch (error){
      console.log(error)
    }
  }

  render() {
    const { mistList } = this.state
    if (mistList.length === 0) return null
    return (
      <div className={msitNavStyle.msitNav}>
        <Swiper loop>
          <Item><SwiperItem mistList={mistList.slice(0, (mistList.length / 2))} geohash={this.props.home}/></Item>
          <Item><SwiperItem mistList={mistList.slice(mistList.length / 2, mistList.length)}/></Item>
        </Swiper>
      </div>
    );
  }
}

class SwiperItem extends Component{
  render() {
    const {mistList, geohash} = this.props
    console.log(this.props)
    return (
      <div className={msitNavStyle.swiperItem}>
        {
          mistList.map(item => (
            <div className={msitNavStyle.swiperItemChild} key={item.id}>
              <Link to={`/food?geohash=${geohash}&title=${item.title}&restaurant_category_id=239`} style={{textDecoration: 'none'}}>
                <div style={{flex: '1.5'}}><img alt='展示图片' src={`https://fuss10.elemecdn.com/${item.image_url}`}/></div>
                <div style={{flex: '1', textAlign: 'center', color: '#666'}}>{item.title}</div>
              </Link>
            </div>
          ))
        }
      </div>
    )
  }
}

const mapStateToProps = state => state
const mapDispatchToProps = {}
export default connect(mapStateToProps, mapDispatchToProps)(MsitNav);
