import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
    <nav>
      <div className="nav-wrapper deep-purple lighten-1">
        <div className="container">
          <Link to="/" className="brand-logo">User Management</Link>
        </div>
      </div>
    </nav>
    );
  }
}

export default NavBar;
