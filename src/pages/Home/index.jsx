import React, {Component} from 'react';
import qs from 'qs'
import TabBar from "@/components/Tabbar";
import Header from "@/components/Header";
import homeStyle from './index.module.css'
import {Msite, Search} from '@/router'
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
    const {name, geohash} = this.state
    return (
      <div className={homeStyle.homePage}>
        <Header render={() => <HeaderSearch/>} location={name} tips={'登录|注册'}/>
        <Route exact path='/home/msite' component={Msite}/>
        <Route exact path={`/home/search/:geohash`} component={Search}/>
        <TabBar geohash={geohash}/>
      </div>
    );
  }
}

export default Home;
