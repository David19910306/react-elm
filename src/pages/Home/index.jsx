import React, {Component} from 'react';
import qs from 'qs'
import TabBar from "@/components/Tabbar";
import Header from "@/components/Header";
import homeStyle from './index.module.css'
import {Msite, Search, List, Profile} from '@/router'
import {HeaderSearch} from "@/components/Iconfonts";
import {getAccuratePosition} from "@/api/server.home";
import {Route} from "react-router-dom";

class Home extends Component {
  state = {name: '',geohash:''}
  async componentDidMount(){
    const {search, pathname} = this.props.location
    this.setState(state => ({pathname,geohash:qs.parse(search.slice(1)).geohash}), async () => {
      try {
        const response = await getAccuratePosition(this.state.geohash)
        response.status === 200 && this.setState({name: response.data.name})
      }catch (error){
         console.log(error.message)
      }
    })
  }
  render() {
    const {geohash, name} = this.state
    const {location: {pathname}} = this.props
    // console.log(pathname)
    return (
      <div className={homeStyle.homePage}>
        <Header render={() => <HeaderSearch/>}
                location={pathname.includes('/msite')? name: pathname.includes('/search')? '搜索': pathname.includes('/list')? '订单': pathname.includes('/mine')?'我的':''}
                tips={pathname.includes('/mine')? '': '登录|注册'}/>
        <Route exact path='/home/msite' component={Msite}/>
        <Route exact path={`/home/search/:geohash`} component={Search}/>
        <Route exact path='/home/list' component={List}/>
        <Route exact path='/home/mine' component={Profile}/>
        <TabBar geohash={geohash}/>
      </div>
    );
  }
}

export default Home;
