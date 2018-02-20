import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from "react-router-dom";

const NavItem = (props) => {
    const {to,activeClassName,icon,name,exact} = props;
    return (
        <li><NavLink activeClassName={activeClassName} to={to}> {icon} {name}</NavLink></li>
    );
};

NavItem.propTypes = {};
NavItem.defaultProps = {};

export default NavItem;
