import React from 'react';
import { Link } from 'react-router-dom';

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
            <div>
                <h1>Task Manager</h1>
                <p>Login</p>
                <div>
                    <button type="button">Log in with Google</button>
                    <button type="button">Log in with Facebook</button>
                </div>
                <div>
                    <p>OR</p>
                </div>

                <label htmlFor="email">
                    <p>Email</p>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={email}
                        onChange={this.updateInputValue}
                    />
                </label>

                <label htmlFor="password">
                    <p>Password</p>
                    <div>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={this.updateInputValue}
                        />
                        {/* <p>eyeball goes here</p> */}
                    </div>
                </label>

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
            </div>
        );
    }
}

export default GuestLanding;
