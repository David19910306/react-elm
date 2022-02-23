import React, {Component} from 'react';
import './index.scss'

class Header extends Component {
  render() {
    return (
      <div className='header-top'>
        <div className='left'>{this.props.render()}</div>
        <div className='center'>{this.props.location}</div>
        <div className='right'>{this.props.tips}</div>
      </div>
    );
  }
}

export default Header;
