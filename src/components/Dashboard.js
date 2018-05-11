import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import db from './config/firebaseInit';


class Dashboard extends Component {
  constructor(){
    super();
    this.state = {
      users:[]
    }
}

  componentDidMount(){
    db.collection('users').orderBy('work').get()
    .then(querySnapshot => {
      querySnapshot.forEach(doc => {
        const data = {
          id : doc.id,
          user_id : doc.data().user_id,
          name : doc.data().name,
          work : doc.data().work
        } 
        const users = this.state.users;
        users.push(data);
        this.setState({users:users})
      })
    })
  }

  render() {

    const users = this.state.users;
    const user = users.map(user => {
      return <li className="collection-item" key={user.id}><div className="chip">{user.work}</div>{user.user_id}:{user.name}  <Link to={`/${user.user_id}`} className="secondary-content"><i className="fa fa-eye"></i></Link></li>
    })


    return (
      <div className="Dashboard">
      <div className="container">
        <ul className="collection with-header">
        <li className="collection-header"><h4>Users</h4></li>
          {user}
        </ul>
      </div>  
        <div className="fixed-action-btn">
            <Link to="/add-user" className="btn-floating btn-large deep-purple lighten-2"><i className="fa fa-plus"></i></Link>
        </div>
      </div>
    );
  }
}

export default Dashboard;
