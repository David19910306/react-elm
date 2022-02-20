import React, {Component} from 'react';
import Header from "./Header";
import Item from "./Item";
import './index.css'

class Restaurant extends Component {
  render() {
    return (
      <div className='restaurant'>
        <Header/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
      </div>
    );
  }
}

export default Restaurant;
