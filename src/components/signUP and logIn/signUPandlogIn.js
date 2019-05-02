import React, {Component} from 'react';
import '../signUP and logIn/signUPandlogIn.scss'

import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { history } from '../../loginAndSignup/_helpers';
import { alertActions } from '../../loginAndSignup/_actions';
import { PrivateRoute } from '../../loginAndSignup/_components';
import { HomePage } from '../../loginAndSignup/HomePage';
import { LoginPage } from '../../loginAndSignup/LoginPage';
import { RegisterPage } from '../../loginAndSignup/RegisterPage';
class signUPandlogIn extends Component {
    constructor(props) {
        super(props);

        const { dispatch } = this.props;
        history.listen((location, action) => {
            // clear alert on location change
            dispatch(alertActions.clear());
        });
    }
    render() {
        const { alert } = this.props;
        return (
            <div className="jumbotron">
            <div className="container">
                <div className="row justify-content-center">
                    {alert.message &&
                        <div className={`alert ${alert.type}`}>{alert.message}</div>
                    }
                    <Router history={history}>
                            <PrivateRoute exact path="/" component={HomePage} />
                            <Route path="/login" component={LoginPage} />
                            <Route path="/register" component={RegisterPage} />
                    </Router>
                </div>
            </div>
        </div>
        )
    }
}

function mapStateToProps(state) {
    const { alert } = state;
    return {
        alert
    };
}

const connectedApp = connect(mapStateToProps)(signUPandlogIn);
export default connectedApp; 