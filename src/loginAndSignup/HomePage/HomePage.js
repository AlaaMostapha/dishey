import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../_actions';

class HomePage extends React.Component {
   
    componentDidMount() {
       this.props.dispatch(userActions.getAll());
    }

   // handleDeleteUser(id) {
     //   return (e) => this.props.dispatch(userActions.delete(id));
   // }
  
    render() {
        const { user } = this.props;
       // const { user, users } = this.props;
        return (
            <div className="col-md-6 col-md-offset-3">
                <h1>Hi {user[0].username}!</h1>
                <p>You're logged in Dishey!!</p>
                <p>
                    <Link to="/login">Logout</Link>
                </p>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return {
        user,
        users
    };
}

const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };