import React from 'react';
import { Link } from 'react-router-dom';
import GuestLandingStyles from './GuestLandingStyles';

class GuestLanding extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            showPassword: false,
        };
        this.updateInputValue = this.updateInputValue.bind(this);
        this.togglePassword = this.togglePassword.bind(this);
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

    togglePassword() {
        this.setState(state => {
            return { showPassword: !state.showPassword };
        });
    }

    render() {
        const { password, email, showPassword } = this.state;

        return (
            <GuestLandingStyles>
                <h1 className="logo">Task Manager</h1>
                <div className="login-inner">
                    <p className="login-inner__title">Login</p>

                    <button className="login-btn" type="button">
                        <i className="fab fa-google login-btn__logo" />
                        Log in with Google
                    </button>
                    <button className="login-btn" type="button">
                        <i className="fab fa-facebook-square login-btn__logo" />
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
                        <div className="password-header">
                            <p className="login-inner__label">Password</p>
                            <Link to="/forgotpassword">
                                Forgot your password?
                            </Link>
                        </div>
                        <div className="password-inner-container">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                className="login-inner__input"
                                id="password"
                                name="password"
                                value={password}
                                onChange={this.updateInputValue}
                            />

                            {showPassword ? (
                                /*eslint-disable */
                                <i
                                    className="far fa-eye-slash password-inner-container__icon"
                                    onClick={this.togglePassword}
                                />
                            ) : (
                                <i
                                    className="far fa-eye password-inner-container__icon"
                                    onClick={this.togglePassword}
                                />
                            )}
                        </div>
                    </label>
                </div>
                <button className="login-inner__login-btn" type="button">
                    Log in
                </button>

                <label htmlFor="keepLoggedIn" className="keep-login">
                    <input type="checkbox" id="keepLoggedIn" />
                    Keep me logged in
                </label>

                <hr />

                <p className="footer-text">
                    Don&apos;t have an account?{' '}
                    <Link to="/signup">Sign up</Link>
                </p>
                <p className="footer-text">
                    Not sure if you&apos;d like to register?
                    <br />
                    <br />
                    <Link to="/dashboard">Try as guest user</Link>
                </p>
            </GuestLandingStyles>
        );
    }
}

export default GuestLanding;
