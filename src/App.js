import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";

import Navigation from "./components/common/Navigation";
import HomePage from "./components/home/HomePage";
import AboutPage from "./components/about/AboutPage";
import UsersPage from "./components/users/UsersPage";
import ManageUsersPage from "./components/users/ManageUsersPage";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/users" component={UsersPage} />
        <Route path="/user/:id" component={ManageUsersPage} />
        <Route path="/user" component={ManageUsersPage} />
      </Switch>
    </div>
  );
}

export default App;
