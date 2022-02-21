import React, {Component} from 'react';
import {HeaderSearch} from "@/components/Iconfonts";
import Header from "@/components/Header";
import {ToLeft} from "@/components/Iconfonts";

class City extends Component {
  render() {
    return (
      <div style={{height: '100%', display: 'flex', flexDirection: 'column'}}>
        <Header render={() => <HeaderSearch value={<ToLeft/>}/>} location={'深圳'} tips={'切换城市'}/>
        <div className='search-container'></div>
      </div>
    );
  }
}

export default City;
