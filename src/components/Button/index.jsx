import React, {Component} from 'react';
import {Button} from "antd-mobile";
import {Hook} from "../Iconfonts";
import './index.scss'

class MyButton extends Component {
  state = {textContent: ''}

  clickButtonHandler = (currentText) => {
    return event => {
      const {textContent} = event.target
      this.props.onClickHandle(textContent)
      textContent === currentText &&
      this.setState({textContent})
    }
  }

  render() {
    const {textContent} = this.state
    const {currentText, render, currentClick} = this.props
    return (
      <Button className={currentClick.length !== 0 && currentClick.find(current => current === textContent)? 'activeButton': ''} onClick={this.clickButtonHandler(currentText)}>
        <Hook display={currentClick.length !== 0 && currentClick.find(current => current === textContent) ? '': 'none'}/>
        {render()}
        {currentText}
      </Button>
    );
  }
}

export default MyButton;
