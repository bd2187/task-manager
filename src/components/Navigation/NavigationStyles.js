import styled from 'styled-components';

const primaryColor = '#64abe8';

const NavigationStyles = styled.div`
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    height: 40px;

    .nav-icon {
        color: ${primaryColor};
        margin: 0 10px;
    }

    .inner-nav-container {
        /* background: red; */
    }
`;

export default NavigationStyles;
