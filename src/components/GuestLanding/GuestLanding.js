import React from 'react';
import { Link } from 'react-router-dom';
import GuestLandingStyles from './GuestLandingStyles';

class GuestLanding extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };
        this.updateInputValue = this.updateInputValue.bind(this);
    }

    updateInputValue(evt) {
        const nameAttr = evt.target.name;

        if (nameAttr === 'email') {
            this.setState({
                email: evt.target.value,
            });
        }

        if (nameAttr === 'password') {
            this.setState({
                password: evt.target.value,
            });
        }
    }

    render() {
        const { password, email } = this.state;

        return (
            <GuestLandingStyles>
                <h1 className="logo">Task Manager</h1>
                <div className="login-inner">
                    <p className="login-inner__title">Login</p>

                    <button className="login-btn" type="button">
                        Log in with Google
                    </button>
                    <button className="login-btn" type="button">
                        Log in with Facebook
                    </button>
                </div>
                <div className="divider">
                    <p className="divider__text">OR</p>
                </div>

                <div className="login-inner">
                    <label htmlFor="email">
                        <p className="login-inner__label">Email</p>
                        <input
                            type="email"
                            className="login-inner__input"
                            name="email"
                            id="email"
                            value={email}
                            onChange={this.updateInputValue}
                        />
                    </label>

                    <label htmlFor="password">
                        <p className="login-inner__label">Password</p>
                        <div>
                            <input
                                type="password"
                                className="login-inner__input"
                                id="password"
                                name="password"
                                value={password}
                                onChange={this.updateInputValue}
                            />
                            {/* <p>eyeball goes here</p> */}
                        </div>
                    </label>
                </div>
                <button type="button">Log in</button>

                <label htmlFor="keepLoggedIn">
                    <input type="checkbox" id="keepLoggedIn" />
                    <p>Keep me logged in</p>
                </label>

                <hr />

                <p>
                    Don&apos;t have an account?{' '}
                    <Link to="/signup">Sign up</Link>
                </p>
                <p>
                    Not sure if you&apos;d like to register?
                    <Link to="/dashboard">Try as guest user</Link>
                </p>
            </GuestLandingStyles>
        );
    }
}

export default GuestLanding;
