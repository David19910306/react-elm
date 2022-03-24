import React, {Component} from 'react';
import Header from "@/components/Header";
import {HeaderSearch} from "@/components/Iconfonts";
import {ToRight} from "@/components/Iconfonts";
import {getCitiesHot, getCitiesGroup, getLocationCity} from "@/api/server.city";
import {Link} from "react-router-dom";
import cities from './index.module.css'
import {UserOutline} from "antd-mobile-icons";
import {connect} from "react-redux";

class Cities extends Component {
  state = {location: {}, hot: [], groups: {}}
  async componentDidMount(){
    //请求数据
    try{
      const location = await getLocationCity({type: 'guess'})
      location.status === 200 && this.setState(state => ({location: location.data}))
      const hot = await getCitiesHot({type: 'hot'})
      hot.status === 200 && this.setState(state => ({hot: hot.data}))
      const group = await getCitiesGroup({type: 'group'})
      group.status === 200 && this.setState(state => ({groups: group.data}))
    }catch(err){
      console.log(err.message)
    }
  }
  render() {
    const {location, hot, groups} = this.state
    return (
      <div style={{height: '100%', display: 'flex', flexDirection: 'column'}}>
        <Header render={() => <HeaderSearch value={'ele.me'}/>} location={''} tips={Object.keys(this.props.userInfo).length === 0? '登录|注册': <UserOutline fontSize={24} style={{marginRight: '.3rem'}} />} props={this.props}/>
        <div style={{overflow:'auto', flex:'1'}}>
          <div className={cities.location}>
            <div className={cities.cityTip}>
              <span style={{fontWeight: '400', fontSize: '.55rem', color: '#999', fontFamily: 'Misrosoft Yahei'}}>当前定位城市：</span>
              <span>定位不准时，请在城市列表中选择</span>
            </div>
            <Link to={`/city/${location.name}/${location.id}`}>
              <div className={cities.guessCity}>
                <span>{location.name}</span>
                <ToRight color='#999'/>
              </div>
            </Link>
          </div>

          <div className={cities.CityContainer}>
            <h4 className={cities.hoyCityTitle}>热门城市</h4>
            <ul className={cities.cityList}>
              {
                hot.map(city => <Link key={city.id} to={`/city/${city.name}/${city.id}`}><li>{city.name}</li></Link>)
              }
            </ul>
          </div>

          {
            Object.getOwnPropertyNames(groups).sort().map((group, index) =>
              <div className={cities.CityContainer} key={group}>
                <h4 className={cities.hoyCityTitle}>{index === 0? `${group} (按字母排序)`: group}</h4>
                <ul className={cities.cityList}>
                  {
                    groups[group].map(city => <Link key={city.id} to={`/city/${city.name}/${city.id}`}><li style={{color: '#666'}}>{city.name}</li></Link>)
                  }
                </ul>
              </div>
            )
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => state
export default connect(mapStateToProps, {})(Cities);
