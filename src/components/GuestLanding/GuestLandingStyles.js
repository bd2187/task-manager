import styled from 'styled-components';

const primaryColor = '#64abe8';
const secondaryColor = '#333';

const GuestLandingStyles = styled.div`
    min-height: 100vh;
    min-width: 100vw;
    padding: 10px;
    color: ${secondaryColor};

    a {
        color: ${primaryColor};
        text-decoration: underline;
    }

    .logo {
        font-size: 20px;
        color: ${primaryColor};
    }

    .login-btn,
    .login-inner__input,
    .login-inner__login-btn {
        display: block;
        width: 100%;
        background: #fff;
        padding: 10px;
        font-size: 14px;
        border: 1px solid #ddd;
        border-radius: 4px;
    }

    .login-btn {
        text-align: center;
        margin: 13px auto;
        display: flex;
        align-items: center;
        justify-content: center;

        .fa-google {
            color: #db3236;
        }

        .fa-facebook-square {
            color: #3b5998;
        }

        .login-btn__logo {
            margin: 0 10px;
            font-size: 16px;
        }
    }

    .login-inner__login-btn {
        margin: 8px 0px 25px;
    }

    .login-inner {
        margin: 15px auto;

        .login-inner__title {
            font-size: 26px;
            font-weight: 600;
        }

        .login-inner__label {
            margin: 9px 0;
            font-size: 14px;
            font-weight: 600;
            letter-spacing: 0.4px;
        }
    }

    .login-inner__login-btn {
        background: ${primaryColor};
        color: #fff;
    }

    .divider {
        background: #ddd;
        position: relative;
        width: 100%;
        height: 1px;
        margin: 30px auto;

        .divider__text {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            padding: 10px;
            font-size: 14px;
            background: #fff;
        }
    }

    .keep-login {
        display: flex;
        width: max-content;
        align-items: center;
        margin-bottom: 25px;
        cursor: pointer;
    }

    .keep-login #keepLoggedIn {
        margin-right: 5px;
    }

    .footer-text {
        text-align: center;
        margin: 20px auto;
        font-size: 13px;
    }
`;

export default GuestLandingStyles;
