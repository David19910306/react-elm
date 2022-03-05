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
    const {value} = this.props;
    // console.log(this.props)
    return value ? <span style={{fontSize: '.8rem', color: '#fff', fontWeight: 'border', marginLeft: typeof value === 'string' ? '.5rem': '0rem'}}>
        {this.props.value}</span>:
    (
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
      return count >=1? true: (count >= 0? true: false)
      // return count>=1?true:((count>0)?true:false); //两次三目运算
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

export class ToRight extends Component {
  render() {
    const {color, fontSize, marginLeft} = this.props
    return (
      <i className='iconfont icon-fangxiang-you' style={{fontSize:`${fontSize}? ${fontSize} : '1rem'`, fontWeight: 'border', color,
        marginLeft: `${marginLeft}? ${marginLeft} :'0.75rem'`}}></i>
    );
  }
}

export class ToLeft extends Component {
  render() {
    return (
      <i className='iconfont icon-fangxiang-zuo' style={{fontSize: '1.2rem', fontWeight: 'border', color: '#fff'}}></i>
    );
  }
}

export class Iphone extends Component {
  render() {
    return (
      <i className='iconfont icon-phone-iphone' style={{width: '.5rem', height: '.75rem', display: 'inline-block', verticalAlign: 'middle', lineHeight:'.75rem'}}></i>
    );
  }
}

export class MyList extends Component {
  render() {
    return (
      <i className='iconfont icon-dingdan1' style={{width: '.7rem', height: '.7rem', lineHeight: '1.87rem', fontSize: '.9rem', color: '#999'}}></i>
    );
  }
}

export class MyStore extends Component {
  render() {
    return (
      <i className='iconfont icon-shangcheng' style={{width: '.7rem', height: '.7rem', lineHeight: '1.87rem', fontSize: '.9rem', color: '#fc7b53'}}></i>
    );
  }
}

export class MyVip extends Component {
  render() {
    return (
      <i className='iconfont icon-wodehuiyuan0101' style={{width: '.7rem', height: '.7rem', lineHeight: '1.87rem', fontSize: '.9rem', color: '#ffc636'}}></i>
    );
  }
}

export class MyService extends Component {
  render() {
    return (
      <i className='iconfont icon-fuwuzhongxin1' style={{width: '.7rem', height: '.7rem', lineHeight: '1.87rem', fontSize: '.9rem', color: '#4aa5f0'}}></i>
    );
  }
}

export class MyElmApp extends Component {
  render() {
    return (
      <i className='iconfont icon-elemo' style={{width: '.7rem', height: '.7rem', lineHeight: '1.87rem', fontSize: '.9rem'}}></i>
    );
  }
}

export class Sort extends Component {
  render() {
    return (
      <i className='iconfont icon-paixu' style={{color: this.props.color, fontSize: this.props.fontSize}}></i>
    );
  }
}

export class Distance extends Component {
  render() {
    return (
      <i className='iconfont icon-position-o' style={{color: this.props.color, fontSize: this.props.fontSize}}></i>
    );
  }
}

export class Hit extends Component {
  render() {
    return (
      <i className='iconfont icon-redu' style={{color: this.props.color, fontSize: this.props.fontSize}}></i>
    );
  }
}

export class Time extends Component {
  render() {
    return (
      <i className='iconfont icon-shijian-xianxing' style={{color: this.props.color, fontSize: this.props.fontSize}}></i>
    );
  }
}

export class Price extends Component {
  render() {
    return (
      <i className='iconfont icon-jiage' style={{color: this.props.color, fontSize: this.props.fontSize}}></i>
    );
  }
}

export class Stars extends Component {
  render() {
    return (
      <i className='iconfont icon-pingfen1' style={{color: this.props.color, fontSize: this.props.fontSize}}></i>
    );
  }
}

export class Hook extends Component {
  render() {
    return (
      <i className='iconfont icon-duigou' style={{color: '#3190e8', fontSize: '.6rem', fontWeight: 'border', display: this.props.display}}></i>
    );
  }
}

export class StarStore extends Component {
  render() {
    return (
      <i className='iconfont icon-pin2' style={{color: '#3190e8', fontSize: '.6rem', marginRight:'.2rem', fontWeight: 'border', display: this.props.display}}></i>
    );
  }
}

export class Ensure extends Component {
  render() {
    return (
      <i className='iconfont icon-servicebaoshuicang' style={{color: '#3190e8', marginRight:'.2rem', fontSize: '.6rem', fontWeight: 'border', display: this.props.display}}></i>
    );
  }
}

export class Check extends Component {
  render() {
    return (
      <i className='iconfont icon-tianmaohuopiaotongxing' style={{color: '#3190e8', marginRight:'.2rem', fontSize: '.6rem', fontWeight: 'border', display: this.props.display}}></i>
    );
  }
}

export class OnlinePay extends Component {
  render() {
    return (
      <i className='iconfont icon-zhifuzhongxin' style={{color: '#3190e8', marginRight:'.2rem', fontSize: '.6rem', fontWeight: 'border', display: this.props.display}}></i>
    );
  }
}

export class OnTime extends Component {
  render() {
    return (
      <i className='iconfont icon-zhunshida' style={{color: '#3190e8', fontSize: '.6rem', marginRight:'.2rem', fontWeight: 'border', display: this.props.display}}></i>
    );
  }
}
