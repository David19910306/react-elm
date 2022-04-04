import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {ExclamationCircleFill, PhoneFill} from "antd-mobile-icons";
import {Button, Dialog} from "antd-mobile";
import {connect} from "react-redux";
import {ToRight} from "@/components/Iconfonts";
import {singout} from "@/api/server.login";
import {clearUserInfo} from "@/redux/actions/login";
import ACTIONS_TYPE from "@/redux/constant";
import './index.scss'

class Info extends Component {

  // 退出登录
  logOut = async () => {
    const result = await Dialog.confirm({
      header: (<ExclamationCircleFill
        style={{
          fontSize: 64,
          color: 'var(--adm-color-warning)',
        }}
      />),
      title: '注意',
      content: '是否确认退出登录？'
    })
    if (result){
      // 退出登录
      const logout = await singout()
      if (logout.data.status === 1){
        // 设置userInfo为空{}
        this.props.clearUserInfo({}) // 传一个空对象
        this.props.history.push('/home/mine')
      }
    }
  }

  render() {
    // console.log(this.props)
    const {userInfo, location: {state}} = this.props
    return (
      <div className='info-container'>
        <section className='userInfo'>
          <ul>
            <li>
              <span>头像</span>
              <div className='avatar'>
                <img src={`https://elm.cangdu.org/img/${userInfo.avatar}`} alt='头像'/>
                <ToRight color='#D8D8D8' fontSize='1.1rem' />
              </div>
            </li>
            <Link to='/home/mine/info/setusername'>
              <li>
                <span>用户名</span>
                <div className='avatar'>
                  <p>{state? state.username: userInfo.username}</p>
                  <ToRight color='#D8D8D8' fontSize='1.1rem' />
                </div>
              </li>
            </Link>
            <Link to='/home/mine/info/address'>
              <li>
                <span>收货地址</span>
                <div className='avatar'>
                  <ToRight color='#D8D8D8' fontSize='1.1rem' />
                </div>
              </li>
            </Link>
          </ul>
        </section>
        <p className='account-binding'>账号绑定</p>
        <section className='userInfo'>
          <ul>
            <li>
              <span><PhoneFill fontSize={16} color='var(--adm-color-primary)'/> 手机</span>
              <div className='avatar'>
                <ToRight color='#D8D8D8' fontSize='1.1rem' />
              </div>
            </li>
          </ul>
        </section>
        <p className='account-binding'>安全设置</p>
        <section className='userInfo'>
          <ul>
            <Link to='/forget'>
              <li>
                <span>登录密码</span>
                <div className='avatar'>
                  <p>修改</p>
                  <ToRight color='#D8D8D8' fontSize='1.1rem' />
                </div>
              </li>
            </Link>
          </ul>
        </section>
        <Button block style={{margin:'1.2rem auto', '--background-color': '#d8584a', '--text-color': '#fff', width: '93%'}} onClick={this.logOut}>退出登录</Button>
      </div>
    );
  }
}

const mapStateToProps = state => state
const mapDispatchToProps = {
  [ACTIONS_TYPE.CLEAR_USERINFO]: clearUserInfo
}
export default connect(mapStateToProps, mapDispatchToProps)(Info);
