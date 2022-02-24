import React, {Component} from 'react';
import {TabBar} from "antd-mobile";
import {
  HomePage, Search, List, Mine
} from "../Iconfonts";
import {withRouter} from "react-router-dom";
import './index.scss'

class TabBarComponent extends Component {
  state = {
    tabs: [
      {key: '/home/msite', title: '首页', icon: <HomePage/>},
      {key: '/home/search', title: '发现', icon: <Search/>},
      {key: '/home/list', title: '订单', icon: <List/>},
      {key: '/home/mine', title: '我的', icon: <Mine/>}
    ]
  }

  //切换面板的回调
  tabChange = value => {
    // console.log(value, '21行')
    this.props.history.push(value)
  }
  render() {
    const {location} = this.props
    // console.log(geohash)
    return (
      <div className='tabBar'>
        <TabBar onChange={value => value.endsWith('/search')?
          this.tabChange(`${value}/${this.props.geohash}`): value.endsWith('/msite')?
          this.tabChange(`${value}?geohash=${this.props.geohash}`) :this.tabChange(value)}
                avtiveKey={location.pathname} >
          {
            this.state.tabs.map(tab => <TabBar.Item key={tab.key} icon={tab.icon} title={tab.title}></TabBar.Item>)
          }
        </TabBar>
      </div>
    );
  }
}

export default withRouter(TabBarComponent);
