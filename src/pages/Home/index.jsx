import React, {Component} from 'react';
import TabBar from "@/components/Tabbar";
import Header from "@/components/Header";
import homeStyle from './index.module.css'
import Content from "./Content";
import {HeaderSearch} from "@/components/Iconfonts";

class Home extends Component {
  render() {
    return (
      <div className={homeStyle.homePage}>
        <Header render={() => <HeaderSearch/>}/>
        <Content/>
        <TabBar/>
      </div>
    );
  }
}

export default Home;
