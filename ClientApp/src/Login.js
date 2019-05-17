import React, { Component } from 'react';
import { Navbar, Button } from 'react-bootstrap';
//import './App.css';
import Auth from './Auth.js';
const auth = new Auth();


export class Login extends Component {
    goTo(route) {
        this.props.history.replace(`/${route}`)
    }

    login() {
        this.props.auth.login();
    }

    logout() {
        this.props.auth.logout();
    }

    componentDidMount() {
        const { renewSession } = this.props.auth;

        if (localStorage.getItem('isLoggedIn') === 'true') {
            renewSession();
        }
    }

    render() {
        const { isAuthenticated } = this.props.auth;

        return (
            <div className='logBtnContainer'>
               {!isAuthenticated() && (
                    <Button bsStyle="primary" className="btn-margin" onClick={this.login.bind(this)}>
                        Log In
                    </Button>)
                }
                { isAuthenticated() && (
                    <Button bsStyle="primary" className="btn-margin" onClick={this.logout.bind(this)}>
                        Log Out
                    </Button> )
                }
            </div>
        );
    }
}
