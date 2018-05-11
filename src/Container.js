import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import NavBar from './components/NavBar';
import Dashboard from './components/Dashboard';
import NewUser from './components/NewUser';
import ViewUser from './components/ViewUser';
import UpdateUser from './components/UpdateUser';


class Container extends Component {
  render() {
    return (
      <div className="Container">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Dashboard}></Route>
          <Route path="/add-user" component={NewUser}></Route>
          <Route exact path="/:id" component={ViewUser}></Route>
          <Route path="/update/:id" component={UpdateUser}></Route>
        </Switch>
      </div>
    );
  }
}

export default Container;
