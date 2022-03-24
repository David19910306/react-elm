import React, {Component} from 'react';
import {connect} from "react-redux";
import {Button, Form, Input, Modal, Toast} from "antd-mobile";
import Header from "@/components/Header";
import {ToLeft} from "@/components/Iconfonts";
import SendAddress from "./SendAddress";
import ConnectPerson from "./ConnectPerson";
import './index.scss'
import {ExclamationCircleFill, UserOutline} from "antd-mobile-icons";
import {addAddress} from "../../../api/server.address";

// class ConnectPerson extends Component {
//   state = {
//     name: '',
//     sex: 0
//   }
//   // 输入框信息内容的变化
//   inputChange = inputValue => {
//     this.setState({name: inputValue})
//   }
//   // 单选框按钮组的变化, 性别：0代表男性，1代表女性
//   radioChange = radioValue => {
//     const sex = radioValue === 'female' ? 1 : 0
//     this.setState({sex}, () => {
//       this.state.name !== '' && this.props.getPersonMessage({name:this.state.name, sex:this.state.sex})
//     })
//   }
//   render() {
//     return (
//       <>
//         <Input placeholder='你的名字' onChange={this.inputChange} style={{borderBottom: '.025rem solid #f5f5f5', '--placeholder-color':'#999', '--font-size': '.7rem'}} />
//         <Radio.Group onChange={this.radioChange}>
//           <Space direction='horizontal' style={{marginTop: '.5rem'}}>
//             <Radio value='male' style={{marginRight: '.5rem'}}>先生</Radio>
//             <Radio value='female'>女士</Radio>
//           </Space>
//         </Radio.Group>
//       </>
//     )
//   }
// }

// class SendAddress extends Component {
//   state = {main:'', sub: ''}
//   // 主要地址信息
//   mainAddress = address => {
//     this.setState( {main:address})
//   }
//   // 详细门牌号地址
//   subAddress = subAddress => {
//     this.setState({sub:subAddress}, () => {
//       this.state.main !== '' && this.props.getAddress(this.state.main + this.state.sub)
//     })
//   }
//    render(){
//      return (
//        <>
//          <Input placeholder='小区/写字楼/学校等' style={{'--placeholder-color':'#999'}} onChange={this.mainAddress} />
//          <section style={{backgroundColor: '#f5f5f5', height: '.025rem', width: '100%', margin: '.2rem 0'}}></section>
//          <Input placeholder='详细地址（如门牌号）' style={{'--placeholder-color':'#999'}} onChange={this.subAddress}/>
//        </>
//      )
//    }
// }

class AddAddress extends Component {
  formRef = React.createRef()
  // 表单提交成果
  onFinish = values => {

  }

  // 表单提交按钮事件submit, class组建中获取form表单的实例，可以通过ref获取
  onSubmit = () => {
    // 先判断表单是否合格
    const form = this.formRef.current?.getFieldsValue()
    Object.keys(form).every(key => form[key] !== undefined)?
      this.props.userInfo.user_id? // 首先判断用户是否登录
        this.addPersonLocation(form):
        Modal.alert({
          header: <ExclamationCircleFill style={{fontSize: 64, color: 'var(--adm-color-warning)'}} />,
          title: '警告',
          content: (<>
            <div style={{textAlign: 'center'}}>用户尚未登录，请先登录后在操作</div>
          </>)
        })
        :Modal.alert({
          header: <ExclamationCircleFill style={{fontSize: 64, color: 'var(--adm-color-warning)'}} />,
          title: '警告',
          content: (<>
            <div style={{textAlign: 'center'}}>请完善信息</div>
          </>)
        })
  }

  // 增加收货地址
  addPersonLocation = async form => {
    const {user_id} = this.props.userInfo
    const {address, person, phone, tag} = form
    const result = await addAddress({
      user_id,
      address: address.mainAddress,
      address_detail:address.subAddress,
      geohash:this.props.home,
      name:person.name,
      phone,
      tag,
      sex: person.sex === 'male'? 1: 2,
      poi_type: 0,
      phone_bk: '12345678901',
      tag_type: tag === '家'? 2:tag==='学校'? 3: tag==='公司'? 4: 2
    })
    if(result.status === 200 && result.data.status === 1){
      Toast.show({icon: 'success', content: '地址添加成功'})
      // 调回上一个界面
      this.props.history.go(-1)
    }
  }

  // 父组件获取子组件FormItem的值
  getPersonMessage = (person) => {
    this.formRef.current?.setFieldsValue({person})
  }
  // 父组件获取子组件FormItem的值
  getAddress = address => {
    this.formRef.current?.setFieldsValue({address})
  }

  render() {
    return (
      <div className='add-address'>
        <Header props={this.props} render={() => <ToLeft/>} location='添加地址' tips={Object.keys(this.props.userInfo).length === 0? '登录|注册': <UserOutline fontSize={24} style={{marginRight: '.3rem'}} />} />
        <Form layout='horizontal' ref={this.formRef}
              footer={<Button block type='submit' on color='primary' onClick={this.onSubmit} size='large'>确定</Button>} onFinish={this.onFinish} onFinishFailed={this.onFinishFailed}>
          <Form.Item label='联系人' name='person'>
            <ConnectPerson getPersonMessage={this.getPersonMessage}/>
          </Form.Item>
          <Form.Item label='联系电话' name='phone'>
            <Input placeholder='你的手机号' style={{'--placeholder-color':'#999'}} />
          </Form.Item>
          <Form.Item label='送餐地址' name='address'>
            <SendAddress getAddress={this.getAddress}/>
          </Form.Item>
          <Form.Item label='标签' name='tag'>
            <Input placeholder='无/家/学校/公司' style={{'--placeholder-color':'#999'}} />
          </Form.Item>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = state => state
const mapDispatchToProps = {}
export default connect(mapStateToProps, mapDispatchToProps)(AddAddress);
