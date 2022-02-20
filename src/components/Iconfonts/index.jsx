import React, {Component} from "react";

export class HomePage extends Component {
  render() {
    return (
      <i className='iconfont icon-elemo1' style={{fontSize: '20px'}}></i>
    );
  }
}

export class Search extends Component {
  render() {
    return (
      <i className='iconfont icon-tubiaozhizuomobanyihuifu-' style={{fontSize: '20px'}}></i>
    );
  }
}

export class List extends Component {
  render() {
    return (
      <i className='iconfont icon-dingdan' style={{fontSize: '20px'}}></i>
    );
  }
}

export class Mine extends Component {
  render() {
    return (
      <i className='iconfont icon-31wode' style={{fontSize: '20px'}}></i>
    );
  }
}

export class HeaderSearch extends Component {
  render() {
    return (
      <i className='iconfont icon-sousuo' style={{fontSize: '21px', color: '#fff', fontWeight: 'border'}}></i>
    );
  }
}

export class Stories extends Component {
  render() {
    return (
      <i className='iconfont icon-shangjia' style={{fontSize: '.7rem', color: '#999', fontWeight: 'border', backgroundColor: '#fff',
        marginLeft: '0.75rem', lineHeight: '1.5rem'}}></i>
    );
  }
}

export class BrandLogo extends Component {
  render() {
    return (
      <i className='iconfont icon-pinpaishixiaoziti' style={{fontSize: '.7rem', fontWeight: 'border', color: '#ffd930',
        marginLeft: '0.75rem'}}></i>
    );
  }
}

export class StarsLight extends Component {
  state={starNum: [false, false, false, false, false]}//设置默认的状态
  //计算传过来的值
  componentDidMount(){
    this.getStar(this.props.star); //将传过来的类似7.3数字进行四舍五入再除2，得到的是类似2,3.5,6这种值
  }
  getStar = (count) => {
    let newStar = this.state.starNum.map((item)=>{ //当num=3.5时遍历后newStar数组变成
      --count;
      return count>=1?true:((count>0)?true:false); //两次三目运算
    })
    this.setState({
      starNum:newStar  //设置state为遍历后的新数组
    })
  }
  render() {
    // console.log(this.state.starNum)
    return (
      <span style={{display:'flex',margin:'.25rem 0 .25rem .75rem'}}>
        {
          this.state.starNum.map((item, index) => item? <i key={index} className='iconfont icon-pingjiaxingxing' style={{fontSize: '.4rem', color: '#ff9a0d'}}></i>
            : <i key={index} className='iconfont icon-pingjiaxingxing' style={{fontSize: '.4rem', color: '#333'}}></i>)
        }
      </span>
    )
  }
}
