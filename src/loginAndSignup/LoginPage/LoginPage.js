import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import btm from '../../assets/images/btm-style.png';
import {userActions} from '../_actions';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        // reset login status
        this
            .props
            .dispatch(userActions.logout());
        this.state = {
            username: '',
            password: '',
            submitted: false
        };
        this.handleChange = this
            .handleChange
            .bind(this);
        this.handleSubmit = this
            .handleSubmit
            .bind(this);
    }

    handleChange(e) {
        const {name, value} = e.target;
        this.setState({[name]: value});
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({submitted: true});
        const {username, password} = this.state;
        const {dispatch} = this.props;
        if (username && password) {
            dispatch(userActions.login(username, password));
        }
    }

    render() {
        const {loggingIn} = this.props;
        const {username, password, submitted} = this.state;
        return (
            <div className="col-md-6 col-md-offset-3">
                <h2 className="formH mb-2">Login</h2>
                <div className="btm-style mb-5">
                    <span><img src={btm} alt="alt" className="img-responsive"/></span>
                </div>
                <form name="form" onSubmit={this.handleSubmit}>
                    <div
                        className={'form-group' + (
                            submitted && !username
                                ? ' has-error'
                                : ''
                        )}>
                        <label htmlFor="username" className="mb-2">Username</label>
                        <input
                            type="text"
                            className="form-control"
                            name="username"
                            value={username}
                            onChange={this.handleChange}/> {submitted && !username && <div className="help-block">Username is required</div>}
                    </div>
                    <div
                        className={'form-group' + (
                            submitted && !password
                                ? ' has-error'
                                : ''
                        )}>
                        <label htmlFor="password" className="mb-2">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            name="password"
                            value={password}
                            onChange={this.handleChange}/> {submitted && !password && <div className="help-block">Password is required</div>}
                    </div>
                    <div className="form-group text-center">
                        <button className="btn1 stl2 mr-2">Login</button>
                        {loggingIn}
                        <Link to="/register" className="btn1 registBtn">Register</Link>
                    </div>
                </form>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const {loggingIn} = state.authentication;
    return {loggingIn};
}

const connectedLoginPage = connect(mapStateToProps)(LoginPage);
export {
    connectedLoginPage as LoginPage
};