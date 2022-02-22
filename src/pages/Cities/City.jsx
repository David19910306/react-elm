import React, {Component} from 'react';
import {HeaderSearch} from "@/components/Iconfonts";
import Header from "@/components/Header";
import {ToLeft} from "@/components/Iconfonts";
import {Form, Button, Input} from 'antd-mobile'

import './City.css'

class City extends Component {
  state = {city:{}}
  form = React.createRef();
  onSubmit = () => {
    console.log(this.state.city.id);
    console.log(this.form.current.getFieldsValue())
  }
  componentDidMount(){
    const {match: {params}} = this.props;
    this.setState({city:params})
  }
  render() {
    return (
      <div style={{height: '100%', display: 'flex', flexDirection: 'column', backgroundColor:'#fff'}}>
        <Header render={() => <HeaderSearch value={<ToLeft/>}/>} location={'深圳'} tips={'切换城市'}/>
        <div className='search-container'>
          <Form layout='horizontal' initialValues={{location: ''}} ref={this.form}
                footer={<Button block type='submit' color='primary' onClick={this.onSubmit}>提交</Button>}>
            <Form.Item name='location'>
              <Input placeholder='输入学校、商务楼、地址' />
            </Form.Item>
          </Form>
        </div>
        <ul className="getpois_ul">
          <li>
            <h4 className="pois_name ellipsis">北京大学深圳医院</h4>
            <p className="pois_address ellipsis">广东省深圳市福田区莲花路1120号</p>
          </li>
          <li>
            <h4 className="pois_name ellipsis">深圳福田星河COCO Park</h4>
            <p className="pois_address ellipsis">广东省深圳市福田区福华三路268号</p>
          </li>
          <li>
            <h4 className="pois_name ellipsis">深圳市人民医院</h4>
            <p className="pois_address ellipsis">广东省深圳市罗湖区东门北路1017号</p>
          </li>
          <li>
            <h4 className="pois_name ellipsis">深圳万象城</h4>
            <p className="pois_address ellipsis">广东省深圳市罗湖区宝安南路1881号</p>
          </li>
          <li>
            <h4 className="pois_name ellipsis">深圳市中医院</h4>
            <p className="pois_address ellipsis">广东省深圳市福田区福华路1号</p>
          </li>
          <li>
            <h4 className="pois_name ellipsis">深圳市第三人民医院</h4>
            <p className="pois_address ellipsis">广东省深圳市龙岗区布澜路29号</p>
          </li>
          <li>
            <h4 className="pois_name ellipsis">深圳大学[公交站]</h4>
            <p className="pois_address ellipsis">113路,223路,362路,37路,70路,74路,19路,B728路,M448路,M527路,M539路,E3路,高峰专线128路</p>
          </li>
          <li>
            <h4 className="pois_name ellipsis">香港大学深圳医院</h4>
            <p className="pois_address ellipsis">广东省深圳市福田区海园一路1号</p>
          </li>
          <li>
            <h4 className="pois_name ellipsis">深圳南头</h4>
            <p className="pois_address ellipsis">广东省深圳市南山区 </p>
          </li>
          <li>
            <h4 className="pois_name ellipsis">深圳来福士广场</h4>
            <p className="pois_address ellipsis">广东省深圳市南山区南海大道2163号</p>
          </li>
        </ul>
      </div>
    );
  }
}

export default City;
