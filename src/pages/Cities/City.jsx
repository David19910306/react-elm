import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {HeaderSearch} from "@/components/Iconfonts";
import Header from "@/components/Header";
import {ToLeft} from "@/components/Iconfonts";
import {Form, Button, Input} from 'antd-mobile'
import {getPosition} from "@/api/server.city";
import './City.css'

class City extends Component {
  state = {city:{}, locations: []}
  form = React.createRef();
  onSubmit = async () => {
    const {location} = this.form.current.getFieldsValue()
    //请求服务搜索输入的地址
    try {
      const response = await getPosition({type: 'search', city_id: this.state.city.id, keyword: location})
      response.status === 200 && this.setState({locations: response.data})
    }catch (err) {
      console.error(err)
    }
  }
  componentDidMount(){
    const {match: {params}} = this.props;
    console.log(params)
    this.setState({city:params})
  }
  render() {
    const {city, locations} = this.state
    return (
      <div style={{height: '100%', display: 'flex', flexDirection: 'column', backgroundColor:'#fff'}}>
        <Header render={() => <HeaderSearch value={<ToLeft/>}/>} location={`${city.name}`} tips={'切换城市'}/>
        <div className='search-container'>
          <Form layout='horizontal' initialValues={{location: ''}} ref={this.form}
                footer={<Button block type='submit' color='primary' onClick={this.onSubmit}>提交</Button>}>
            <Form.Item name='location'>
              <Input placeholder='输入学校、商务楼、地址' />
            </Form.Item>
          </Form>
        </div>
        <ul className="getpois_ul">
          {
            locations.map((location, index) => (
              <Link to={`/home/msite?geohash=${location.geohash}`} key={index}>
                <li>
                  <h4 className="pois_name ellipsis">{location.name}</h4>
                  <p className="pois_address ellipsis">{location.address}</p>
                </li>
              </Link>
            ))
          }
        </ul>
      </div>
    );
  }
}

export default City;
