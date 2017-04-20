/**
 * Created by yujuan on 17-4-20.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';

class Counter extends Component {
  constructor(props) {
    super(props);
  }

  onIncrement() {
    this.props.Increase();
  }

  onDecrement() {
    this.props.Decrease();
  }

  render() {


    console.log(this.props.count);
    return (
        <div>
          <h2>Counter</h2>
          <p>The counter value is {this.props.count}</p>
          <button onClick={this.onIncrement.bind(this)}>Increase</button>
          <button onClick={this.onDecrement.bind(this)}>Decrease</button>
        </div>
    )
  }
}
const mapStateToProps = function (state) {
  return state;
};

const mapDispatchToProps = function (dispatch) {
  return {
    Increase: function () {
      return dispatch({type: "COUNTER_INCRE"})
    },
    Decrease: function () {
      return dispatch({type: "COUNTER_DECRE"})
    }
  }
};

const CounterPackage = connect(mapStateToProps, mapDispatchToProps)(Counter);


export default CounterPackage;