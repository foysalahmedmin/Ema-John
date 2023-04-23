import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const ActiveLink = ({to, children}) => {
    return (
        <NavLink
            to={to}
            className={({ isActive, isPending }) =>
                isActive
                    ? "active"
                    : ""
            }
        >
            {children}
        </NavLink>
    );
};

export default ActiveLink;