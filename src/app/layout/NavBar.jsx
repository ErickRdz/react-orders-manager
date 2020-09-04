import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

class NavBar extends Component{

    render(){
        return (
            <Menu>
                <Menu.Item as={NavLink} to='/'>Home</Menu.Item>
                <Menu.Item as={NavLink} to='/orders'>Orders</Menu.Item>
            </Menu>
        );
    }
}

export default NavBar;