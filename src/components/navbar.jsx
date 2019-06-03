/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';

class NavBar extends Component {
    render() {
        return (<nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">Navbar {"  "}
                <span className="badge badge-pill badge-primary">{this.props.totalCounters}</span>
            </a>
        </nav>
        );
    }
}

export default NavBar;