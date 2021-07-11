import React, { Component } from "react";

import Forminput from "components/form-input/FormInput";

import "./SignIn.css";

class SignIn extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
    };
  }

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className='sign-in-container'>
        <div className='sign-in'>
          <h2 className='sign-in__title'>Log in to Hacker Noon</h2>
          <form>
            <Forminput
              name='email'
              type='email'
              onChange={this.handleChange}
              value={this.state.email}
              label='Email'
              required
            />
            <Forminput
              name='password'
              type='password'
              onChange={this.handleChange}
              value={this.state.password}
              label='Password'
              required
            />
          </form>
        </div>
      </div>
    );
  }
}

export default SignIn;
