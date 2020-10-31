import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = (props) => {

    return (
        <nav className="navbar navbar-expand-lg">

            <div className="logo">
                <Link className="navbar-brand" to="/"><h3>Logo Here</h3></Link>
            </div>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="collapsibleNavbar">
                <ul className="navbar-nav m-auto">
                    <li className="nav-item">
                        <NavLink activeClassName="active" className="nav-link home_link" to="/home">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink activeClassName="active" className="nav-link" to="/regular-table">Regular Table</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink activeClassName="active" className="nav-link" to="/sortable-table">Sortable Table</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink activeClassName="active" className="nav-link" to="/custom-table">Custom Table</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink activeClassName="active" className="nav-link" to="/table-infinity-scroll">Table Infinity Scroll</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;