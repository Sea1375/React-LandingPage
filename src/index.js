import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";

// layouts

import Admin from "layouts/Admin.js";
import Auth from "layouts/Auth.js";

// views without layouts

import Landing from "views/Landing.js";
import Profile from "views/Profile.js";
import Index from "views/Index.js";
import Home from "views/Home.js";
import Login from './views/Home/Login';
import Signup from './views/Home/Signup';
import Verification from './views/Home/Verification';
import Verify from './views/Home/Verify';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      {/* add routes with layouts */}
      {/*<Route path="/admin" component={Admin} />*/}
      {/*<Route path="/auth" component={Auth} />*/}
      {/*/!* add routes without layouts *!/*/}
      {/*<Route path="/landing" exact component={Landing} />*/}
      {/*<Route path="/profile" exact component={Profile} />*/}
      {/*<Route path="/home" exact component={Home} />*/}
      <Route path="/" exact component={Home} />
      <Route path="/login" exact component={Login} />
      <Route path="/signup" exact component={Signup} />
      <Route path="/verification" exact component={Verification} />
      <Route path="/verify" exact component={Verify} />
      {/* add redirect for first page */}
      <Redirect from="*" to="/" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
