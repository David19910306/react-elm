import React, { Component } from "react";

// 定义错误边界的组件
export default class Errorboundary extends Component{
  constructor(props){
    super(props)
    // 状态
    this.state = {hasError: false} // 默认是没有错误的
  }

  // 定义错误边界的生命周期函数，渲染备用的UI组件
  static getDerivedStateFromError(error){
    if(error) this.setState({hasError: true});
  }

  // 捕获错误信息
  componentDidCatch(error){
    console.log(error); // 打印错误信息
  }

  render(){
    const {children, errorComponent} = this.props
    if(this.state.hasError) return errorComponent
    return children
  }
}
