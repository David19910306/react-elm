import React, {Component} from 'react';
import {TabBar} from "antd-mobile";
import {connect} from "react-redux";
import {
  HomePage, Search, List, Mine
} from "../Iconfonts";
import {withRouter} from "react-router-dom";
import {recordGeohash} from "@/redux/actions/home";
import ACTIONS_TYPE from "@/redux/constant";
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
    // console.log(value)
    this.props.history.push(value)
  }
  render() {
    const {location, home, tabbarShow} = this.props
    return (
      tabbarShow? <></>:
      <div className='tabBar'>
        <TabBar onChange={value => value.endsWith('/search')?
          this.tabChange(`${value}/${home}`): value.endsWith('/msite')?
          this.tabChange(`${value}?geohash=${home}`) :this.tabChange(value)}
                defaultActiveKey={location.pathname} >
          {
            this.state.tabs.map(tab => <TabBar.Item key={tab.key} icon={tab.icon} title={tab.title}></TabBar.Item>)
          }
        </TabBar>
      </div>
    );
  }
}

// export default withRouter(TabBarComponent);
const mapStateToProps = state => state
const mapDispatchToProps = {
  [ACTIONS_TYPE.RECORD_GEOHASH]: recordGeohash
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(TabBarComponent))
