import React, {Component} from 'react';
import {Stories} from '../../../../../components/Iconfonts'
import './index.scss'

class Header extends Component {
  render() {
    return (
      <div className='header'>
        <Stories/>
        <span>附件商家</span>
      </div>
    );
  }
}

export default Header;
