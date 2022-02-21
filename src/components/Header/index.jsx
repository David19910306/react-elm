import React, {Component} from 'react';
import headerStyle from './index.module.css'

class Header extends Component {
  render() {
    return (
      <div className={headerStyle.header}>
        <div className={headerStyle.left}>{this.props.render()}</div>
        <div className={headerStyle.center}>{this.props.location}</div>
        <div className={headerStyle.right}>{this.props.tips}</div>
      </div>
    );
  }
}

export default Header;
