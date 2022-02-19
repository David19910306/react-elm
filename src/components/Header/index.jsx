import React, {Component} from 'react';
import {HeaderSearch} from '../Iconfonts'
import headerStyle from './index.module.css'

class Header extends Component {
  state = {location: '福田下梅林梅山苑一期二栋（梅山南街）'}
  render() {
    return (
      <div className={headerStyle.header}>
        <div className={headerStyle.left}><HeaderSearch/></div>
        <div className={headerStyle.center}>{this.state.location}</div>
        <div className={headerStyle.right}>登录|注册</div>
      </div>
    );
  }
}

export default Header;
