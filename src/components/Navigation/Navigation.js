/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import NavigationStyles from './NavigationStyles';
import TaskMenu from './TaskMenu/TaskMenu';
import UserMenu from './UserMenu/UserMenu';

class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            taskMenuOpen: false,
            userMenuOpen: false,
        };

        this.toggleMenu = this.toggleMenu.bind(this);
    }

    /**
     *
     * @param String menu
     * @return
     */
    toggleMenu(menu) {
        const menuName = `${menu}MenuOpen`;

        if (this.state.hasOwnProperty(menuName)) {
            this.setState(function(state) {
                return { [menuName]: !state[menuName] };
            });
        }
    }

    render() {
        const { taskMenuOpen, userMenuOpen } = this.state;
        return (
            <div>
                {taskMenuOpen ? <TaskMenu /> : null}
                {userMenuOpen ? <UserMenu /> : null}
                <NavigationStyles className="navigation">
                    <div className="inner-nav-container">
                        {taskMenuOpen ? (
                            <i
                                className="fas fa-times nav-icon"
                                onClick={() => this.toggleMenu('task')}
                                onKeyUp={() => {}}
                            />
                        ) : (
                            <i
                                className="fas fa-bars nav-icon"
                                onClick={() => this.toggleMenu('task')}
                                onKeyUp={() => {}}
                            />
                        )}
                    </div>

                    <div className="inner-nav-container">
                        <i className="fas fa-plus nav-icon" />
                        <i
                            className="fas fa-cog nav-icon"
                            onClick={() => this.toggleMenu('user')}
                            onKeyUp={() => {}}
                        />
                    </div>
                </NavigationStyles>
            </div>
        );
    }
}

export default Navigation;
