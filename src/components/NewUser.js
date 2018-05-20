import React, { Component } from 'react';
import db from './config/firebaseInit';
import { Router, Link } from 'react-router-dom';

class NewUser extends Component {

  constructor(){
    super();
  }

  handleSubmit(e){
    const name = document.querySelector('#name').value;
    const id = document.querySelector('#user-id').value;
    const work = document.querySelector('#work').value;
    
    e.preventDefault(); 
    db.collection('users').add({
      name:name,
      user_id:id,
      work:work,
    })
    
    this.props.history.push('/');
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
