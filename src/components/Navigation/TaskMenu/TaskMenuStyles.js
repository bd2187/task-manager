import styled from 'styled-components';

const TaskMenuStyles = styled.div`
    background: #fff;
    position: fixed;
    top: 40px;
    left: 0;
    bottom: 0;
    width: 80%;

    .task-menu__list,
    .task-menu__expansions {
        margin-top: 20px;
        margin-bottom: 20px;
        margin-left: 30px;
    }
`;

export default TaskMenuStyles;
