import React, {Component} from 'react';
import './index.scss'
import {Link} from "react-router-dom";
import {ToLeft, ToRight} from "../../../../components/Iconfonts";

class Address extends Component {
  render() {
    return (
      <div className='edit-address'>
        <ul className='addressList'>
          <li>
            <div>
              <p>梅山苑[公交站]</p>
              <p><span>12121122</span></p>
            </div>
          </li>
          <li>
            <div>
              <p>梅山苑[公交站]</p>
              <p><span>12121122</span></p>
            </div>
          </li>
          <li>
            <div>
              <p>梅山苑[公交站]</p>
              <p><span>12121122</span></p>
            </div>
          </li>
          <li>
            <div>
              <p>梅山苑[公交站]</p>
              <p><span>12121122</span></p>
            </div>
          </li>
          <li>
            <div>
              <p>梅山苑[公交站]</p>
              <p><span>12121122</span></p>
            </div>
          </li>
          <li>
            <div>
              <p>梅山苑[公交站]</p>
              <p><span>12121122</span></p>
            </div>
          </li>
          <li>
            <div>
              <p>梅山苑[公交站]</p>
              <p><span>12121122</span></p>
            </div>
          </li>
          <li>
            <div>
              <p>梅山苑[公交站]</p>
              <p><span>12121122</span></p>
            </div>
          </li>
          <li>
            <div>
              <p>梅山苑[公交站]</p>
              <p><span>12121122</span></p>
            </div>
          </li>
          <li>
            <div>
              <p>梅山苑[公交站]</p>
              <p><span>12121122</span></p>
            </div>
          </li>
          <li>
            <div>
              <p>梅山苑[公交站]</p>
              <p><span>12121122</span></p>
            </div>
          </li>
          <li>
            <div>
              <p>梅山苑[公交站]</p>
              <p><span>12121122</span></p>
            </div>
          </li>
          <li>
            <div>
              <p>梅山苑[公交站]</p>
              <p><span>12121122</span></p>
            </div>
          </li>
          <li>
            <div>
              <p>梅山苑[公交站]</p>
              <p><span>12121122</span></p>
            </div>
          </li>
        </ul>
        <Link to='/home/mine/info/address/add'>
          <div className="addsite">
            <span>新增地址</span>
            <ToRight color='#D8D8D8' fontSize='1.1rem' />
          </div>
        </Link>
      </div>
    );
  }
}

export default Address;
