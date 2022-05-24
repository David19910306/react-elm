import React, {Component} from 'react';
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {HeaderSearch} from "@/components/Iconfonts";
import Header from "@/components/Header";
import {ToLeft} from "@/components/Iconfonts";
import {Form, Button, Input} from 'antd-mobile'
import {getPosition} from "@/api/server.city";
import ACTIONS_TYPE from "@/redux/constant";
import {recordGeohash} from "@/redux/actions/home";
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
    this.setState({city:params})
  }
  // 点击跳转
  jumpToLocation = path => {
    return () => {
      this.props.recordGeohash(path)
      this.props.history.push(`/home/msite?geohash=${path}`)
    }
  }
  render() {
    const {city, locations} = this.state
    return (
      <div style={{height: '100%', display: 'flex', flexDirection: 'column', backgroundColor:'#fff'}}>
        <Header render={() => <HeaderSearch value={<ToLeft/>}/>} location={`${city.name}`} tips={'切换城市'} props={this.props}/>
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
              <li key={index} onClick={this.jumpToLocation(location.geohash)}>
                <h4 className="pois_name ellipsis">{location.name}</h4>
                <p className="pois_address ellipsis">{location.address}</p>
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}

// export default City;
// export default withRouter(City)
const mapStateToProps = state => state
const mapDispatchToProps = {
  [ACTIONS_TYPE.RECORD_GEOHASH]: recordGeohash
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(City))
