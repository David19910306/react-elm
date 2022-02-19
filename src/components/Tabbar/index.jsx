import React, {Component} from 'react';
import {TabBar} from "antd-mobile";
import {
  HomePage, Search, List, Mine
} from "../Iconfonts";

import tabBarStyle from './index.module.css'

class TabBarComponent extends Component {
  state = {
    tabs: [
      {key: 'home', title: '首页', icon: <HomePage/>},
      {key: 'search', title: '发现', icon: <Search/>},
      {key: 'list', title: '订单', icon: <List/>},
      {key: 'mine', title: '我的', icon: <Mine/>}
    ]
  }
  render() {
    return (
      <div className={tabBarStyle.tabBar}>
        <TabBar>
          {
            this.state.tabs.map(tab => <TabBar.Item key={tab.key} icon={tab.icon} title={tab.title}></TabBar.Item>)
          }
        </TabBar>
      </div>
    );
  }
}

export default TabBarComponent;
