import React, { Component } from "react";

import Forminput from "components/form-input/FormInput";
import SignInSideNotes from "components/sign-in-side-notes/SignInSideNotes";

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
        <SignInSideNotes />
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

            <div className='sign-in__container'>
              <button className='forget-password__btn'>Forgot password</button>
              <button className='sign-in__btn' type='submit'>
                Log In
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SignIn;
