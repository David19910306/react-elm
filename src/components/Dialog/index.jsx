import React, {Component} from 'react';
import './index.scss'

class MyDialog extends Component {

  state = {
    currentSpanId: '' //当前选中的span标签的Id
  }

  clickSpan = (spanId) => {
    return () => {
      this.setState({currentSpanId: spanId})
      this.props.foodsId(spanId)
    }
  }

  render() {
    const {specfoods} = this.props
    return (
      <section className='dialog-container'>
        <h5>规格</h5>
        <section className='dialog-content'>
            <span className='size'>
              {
                specfoods.map(spec => <span key={spec._id} onClick={this.clickSpan(spec._id)} className={this.state.currentSpanId === spec._id? 'activeSpan': ''}>
                  {spec.specs_name}
                </span>)
              }
            </span>
          <span className='priceTag'>{`￥${specfoods.find(spec => spec._id === this.state.currentSpanId)? specfoods.find(spec => spec._id === this.state.currentSpanId).price: 0}`}</span>
        </section>
      </section>
    );
  }
}

export default MyDialog;
