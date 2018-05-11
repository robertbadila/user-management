import React, { Component } from 'react';
import db from './config/firebaseInit';
import { Router, Link } from 'react-router-dom';

class NewUser extends Component {

  constructor(){
    super();
  }

  handleSubmit(e){
    e.preventDefault(); 
  }


  render() {
    return (
      <div className="container">
        <form onSubmit={(e) => this.handleSubmit(e)}>  
          <label htmlFor="name">Name</label>
          <input id="name" type="text"/>
          <label htmlFor="work">Work</label>
          <input id="work" type="text"/>
          <label htmlFor="user-id">Id</label>
          <input id="user-id" type="text"/>
          <button className="btn purple">Submit</button>
        </form>
      </div>
    );
  }
}

export default NewUser;
