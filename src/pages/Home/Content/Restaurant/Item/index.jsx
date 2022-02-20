import React, {Component} from 'react';
import { StarsLight} from '../../../../../components/Iconfonts'
import { Tag} from 'antd-mobile'

import './index.css'

class Item extends Component {
  render() {
    return (
      <div className='item'>
        <div className='left'>
          <img alt='展示图片' src='https://elm.cangdu.org/img/164ad0b6a3917599.jpg'/>
        </div>
        <div className='center'>
          <div className='top'>
            <Tag color='warning' style={{marginLeft: '.75rem'}}>品牌</Tag>&nbsp;<span>效果演示</span>
          </div>
          <div className='centerShow'>
            <StarsLight star={3}/>
            <span style={{lineHeight: '1.06rem'}}>
              <label style={{lineHeight:'.78rem', fontWeight: '600', fontSize: '.65rem', color: '#ff9a0d',marginLeft:'.25rem'}}>2.0</label>
            </span>
          </div>
          <div className='bottom'>
            <span>￥20元起送 / 配送费约￥5</span>
          </div>
        </div>
        <div className='right'>
          <p>保准票</p>
          <section className='section1'>
            <Tag color='primary'>蜂鸟专送</Tag>&nbsp;<Tag color='primary' fill='outline'>准时达</Tag>
          </section>
          <section className='section2'>123.5公里 / <span>13小时11分钟</span></section>
        </div>
      </div>
    );
  }
}

export default Item;
