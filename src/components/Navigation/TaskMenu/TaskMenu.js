import React from 'react';
import TaskMenuStyles from './TaskMenuStyles';
import { Link } from 'react-router-dom';

const TaskMenu = function TaskMeu() {
    return (
        <TaskMenuStyles className="task-menu">
            <ul className="task-menu__list">
                <li>
                    <i className="fas fa-calendar-times" />
                    <Link to="/dashboard/today">Today</Link>
                </li>
                <li>
                    <i className="fas fa-calendar-alt" />
                    <Link to="/dashboard/next-7-days">Next 7 Days</Link>
                </li>
            </ul>
            <ul className="task-menu__expansions">
                <li>
                    <p>Projects</p>
                </li>
                <li>
                    <p>Labels</p>
                </li>
                <li>
                    <p>Filters</p>
                </li>
            </ul>
        </TaskMenuStyles>
    );
};

export default TaskMenu;
