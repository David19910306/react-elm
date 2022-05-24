import React, {Component} from 'react';
import contentStyle from './index.module.css'
import MsitNav from "./MsitNav";
import Restaurant from "./Restaurant";

class Content extends Component {
  render() {
    return (
      <div className={contentStyle.content}>
      <MsitNav/>
      <Restaurant/>
      </div>
    );
  }
}

export default Content;
