import React, { Component } from "react";
import { connect } from "react-redux";

import Button from "./components/button/Button";

import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      count: 0,
    };
  }

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };
  handleDecrease = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div className='App'>
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

export default connect(mapStateToProps)(App);
