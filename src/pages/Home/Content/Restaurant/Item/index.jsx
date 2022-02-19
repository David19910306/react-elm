import React, {Component} from 'react';
import {BrandLogo, StarsLight} from '../../../../../components/Iconfonts'

import './index.css'

class Item extends Component {
  render() {
    return (
      <div className='item'>
        <div className='left'>
          <img src='https://elm.cangdu.org/img/164ad0b6a3917599.jpg'/>
        </div>
        <div className='center'>
          <div className='top'>
            <BrandLogo/> <span>效果演示</span>
          </div>
          <div className='center'>
            <StarsLight star={3}/>
          </div>
          <div className='bottom'></div>
        </div>
        <div className='right'></div>
      </div>
    );
  }
}

export default Item;
