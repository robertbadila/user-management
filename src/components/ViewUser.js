import React, { Component } from 'react';
import { Router, Link } from 'react-router-dom';

import db from './config/firebaseInit';



class ViewUser extends Component {
  constructor(){
    super();
    this.state={
      user: []
    }
  }

  componentWillMount(){
    db.collection('users').orderBy('work').get()
    .then(querySnapshot => {
      querySnapshot.forEach(doc => {
        const data = {
          id : doc.id,
          user_id : doc.data().user_id,
          name : doc.data().name,
          work : doc.data().work
        }
        if(this.props.location.pathname === '/' + data.user_id){
          const user = this.state.user;
          user.push(data);
          this.setState({user:user})
        }
      })
    })
  }

  handleDelete(){
    alert('item will be deleted');
    db.collection('users').get()
    .then(querySnapshot => {
      querySnapshot.forEach(doc => {
        if(this.props.location.pathname === '/' + doc.data().user_id){
          doc.ref.delete();
        }
      })
    })
    this.props.history.push('/');
  }

  render() {
    const user = this.state.user;
    const userInfo = user.map(data => {
      return (
        <div>
        <li className="collection-header" key={data.name}><h4>{data.name}</h4></li>
        <li className="collection-item" key={data.work}> <div className="chip">Work</div>{data.work}</li>
        <li className="collection-item" key={data.id}><div className="chip">User #ID</div>{data.user_id}</li>
        <div className="fixed-action-btn">
            <Link to={`/update/${data.user_id}`} className="btn-floating btn-large deep-purple lighten-2"><i className="fa fa-pencil"></i></Link>
        </div>
        </div>
      )
    })
    
    return (
      <div className="ViewUser">
        <div className="container">
          <ul className="collection with-header">
            {userInfo}
          </ul>
          <button onClick = {() => this.handleDelete()} className="btn red">Delete</button>
          <Link className="btn deep-purple lighten-2" to="/">Back</Link>
        </div>
      </div>
    );
  }
}

export default ViewUser;
