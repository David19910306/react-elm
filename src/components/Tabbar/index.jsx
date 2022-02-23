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
      {key: 'list', title: '订单', icon: <List/>},
      {key: 'mine', title: '我的', icon: <Mine/>}
    ]
  }
  componentDidMount(){

  }

  //切换面板的回调
  tabChange = value => {
    console.log(this.props)
    const newTabs = this.state.tabs.map(tab => tab.key.includes('/search')? {...tab, key: `${tab.key}/${this.props.geohash}`}: tab)
    this.setState({tabs:newTabs}, () => {
      console.log(value, this.state.tabs, 'ppp')
      this.props.history.push(value)
      console.log('sss')
    })
  }
  render() {
    const {location} = this.props
    return (
      <div className='tabBar'>
        <TabBar onChange={value => this.tabChange(value)} avtiveKey={location.pathname} >
          {
            this.state.tabs.map(tab => <TabBar.Item key={tab.key} icon={tab.icon} title={tab.title}></TabBar.Item>)
          }
        </TabBar>
      </div>
    );
  }
}

export default withRouter(TabBarComponent);
