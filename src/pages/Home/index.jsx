import React, {Component} from 'react';
import {connect} from "react-redux";
import TabBar from "@/components/Tabbar";
import Header from "@/components/Header";
import homeStyle from './index.module.css'
import {Msite, Search, List, Profile} from '@/router'
import {HeaderSearch} from "@/components/Iconfonts";
import {getAccuratePosition} from "@/api/server.home";
import {Route} from "react-router-dom";
import {UserOutline} from "antd-mobile-icons";
import {ToLeft} from "../../components/Iconfonts";

class Home extends Component {
  state = {name: '',geohash:''}
  async componentDidMount(){
    const {pathname} = this.props.location
    this.setState(state => ({pathname,geohash:this.props.home}), async () => {
      try {
        const response = await getAccuratePosition(this.state.geohash)
        response.status === 200 && this.setState({name: response.data.name})
      }catch (error){
         console.log(error.message)
      }
    })
  }
  render() {
    const {name} = this.state
    const {location: {pathname}} = this.props
    return (
      <div className={homeStyle.homePage}>
        <Header props={this.props}
                render={pathname.includes('/msite')||pathname.includes('/search')? () => <HeaderSearch/>: () => <ToLeft/> }
                location={pathname.includes('/msite')? name: pathname.includes('/search')? '搜索': pathname.includes('/list')? '订单': pathname.includes('/mine')?'我的':''}
                tips={pathname.includes('/mine')? '': Object.keys(this.props.userInfo).length === 0? '登录|注册': <UserOutline fontSize={24} style={{marginRight: '.3rem'}} />}/>
        <Route exact path='/home/msite' component={Msite}/>
        <Route exact path={`/home/search/:geohash`} component={Search}/>
        <Route exact path='/home/list' component={List}/>
        <Route exact path='/home/mine' component={Profile}/>
        <TabBar/>
      </div>
    );
  }
}

// export default Home;
const mapStateToProps = state => state
const mapDispatchToProps = {}
export default connect(mapStateToProps, mapDispatchToProps)(Home)
