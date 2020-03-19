import styled from 'styled-components';

const GuestLandingStyles = styled.div`
    /* background-color: red; */
    min-height: 100vh;
    min-width: 100vw;
    padding: 10px;

    .logo {
        font-size: 20px;
    }

    .login-btn,
    .login-inner__input {
        display: block;
        width: 100%;
        background: yellow;
        padding: 10px;
        font-size: 14px;
        border: 1px solid grey;
        border-radius: 4px;
    }

    .login-btn {
        text-align: center;
        margin: 13px auto;
    }

    .login-inner__input {
        margin: 8px 0px 25px;
    }

    .login-inner {
        /* background-color: blue; */
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

    .divider {
        background: orange;
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
`;

export default GuestLandingStyles;
