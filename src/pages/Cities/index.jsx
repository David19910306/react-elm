import React, {Component} from 'react';
import Header from "@/components/Header";
import {HeaderSearch} from "@/components/Iconfonts";
import {ToLeft} from "@/components/Iconfonts";
import {getCitiesHot, getCitiesGroup, getLocationCity} from "@/api/server.city";
import cities from './index.module.css'

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
        <Header render={() => <HeaderSearch value={'ele.me'}/>} location={''}/>
        <div style={{overflow:'auto', flex:'1'}}>
          <div className={cities.location}>
            <div className={cities.cityTip}>
              <span style={{fontWeight: '400', fontSize: '.55rem', color: '#999', fontFamily: 'Misrosoft Yahei'}}>当前定位城市：</span>
              <span>定位不准时，请在城市列表中选择</span>
            </div>
            <div className={cities.guessCity}>
              <span>{location.name}</span>
              <ToLeft/>
            </div>
          </div>

          <div className={cities.CityContainer}>
            <h4 className={cities.hoyCityTitle}>热门城市</h4>
            <ul className={cities.cityList}>
              {
                hot.map(city => <li key={city.id}>{city.name}</li>)
              }
            </ul>
          </div>

          {
            Object.getOwnPropertyNames(groups).sort().map((group, index) =>
              <div className={cities.CityContainer} key={group}>
                <h4 className={cities.hoyCityTitle}>{index === 0? `${group} (按字母排序)`: group}</h4>
                <ul className={cities.cityList}>
                  {
                    groups[group].map(city => <li key={city.id} style={{color: '#666'}}>{city.name}</li>)
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

export default Cities;
