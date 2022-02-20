import React, {Component} from 'react';
import TabBar from "../../components/Tabbar";
import Header from "../../components/Header";
import homeStyle from './index.module.css'
import Content from "./Content";

class Home extends Component {
  render() {
    return (
      <div className={homeStyle.homePage}>
        <Header/>
        <Content/>
        <TabBar/>
      </div>
    );
  }
}

export default Home;