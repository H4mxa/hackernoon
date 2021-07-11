import React from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from "./pages/Home/Home";
import SignInSingOutPage from "pages/sign-in-sign-up/SignInSingOut";

import Navbar from "components/navbar/Navbar";

import "./App.css";

const App = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/signin' component={SignInSingOutPage} />
      </Switch>
    </div>
  );
};

export default App;
