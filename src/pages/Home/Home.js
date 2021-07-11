import React, { Component } from "react";
import { connect } from "react-redux";

// --------------- Actions --------------
import { setCounter } from "../../redux/counter/counterAction";

import Button from "../../components/button/Button";

import "./Home.css";

export class Home extends Component {
  handleIncrement = () => {
    this.props.setCounter(this.props.count + 1);
  };
  handleDecrease = () => {
    this.props.setCounter(this.props.count - 1);
  };

  render() {
    return (
      <div className='container'>
        <h1 className='main-title'>Counter Game</h1>
        <span className={"counter"}>{this.props.count}</span>
        <Button type='Increase' onClick={this.handleIncrement} />
        <Button type='Decrease' onClick={this.handleDecrease} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  count: state.counter.count,
});

const mapDispatchToProps = (dispatch) => ({
  setCounter: (count) => dispatch(setCounter(count)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Home);
