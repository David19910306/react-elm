import React, {Component} from 'react';
import { StarsLight} from '../../../../../components/Iconfonts'
import { Tag} from 'antd-mobile'

import './index.css'

class Item extends Component {
  render() {
    return (
      <div className='item'>
        <div className='left'>
          <img alt='展示图片' src={`https://elm.cangdu.org/img/${this.props.image_path}`}/>
        </div>
        <div className='center'>
          <div className='top'>
            <Tag color='warning' style={{marginLeft: '.75rem'}}>品牌</Tag>&nbsp;<span className='title'>{this.props.name}</span>
          </div>
          <div className='centerShow'>
            <StarsLight star={this.props.rating}/>
            <span style={{lineHeight: '1.06rem'}}>
              <label style={{lineHeight:'.78rem', fontWeight: '600', fontSize: '.65rem', color: '#ff9a0d',marginLeft:'.15rem'}}>{this.props.rating}</label>
              <label style={{fontSize: '.4rem', color: '#666', transform: 'scale(.8)', marginLeft: '.13rem'}}>{`月售${this.props.recent_order_num}单`}</label>
            </span>
          </div>
          <div className='bottom'>
            <span>{`￥${this.props.recent_order_num}元起送`} / {`配送费约￥${this.props.float_delivery_fee}`}</span>
          </div>
        </div>
        <div className='right'>
          <p>保准票</p>
          <section className='section1'>
            <Tag color='primary'>蜂鸟专送</Tag>&nbsp;<Tag color='primary' fill='outline'>准时达</Tag>
          </section>
          <section className='section2'>{`${1.45}公里`} / <span>{this.props.order_lead_time}</span></section>
        </div>
      </div>
    );
  }
}

export default Item;
