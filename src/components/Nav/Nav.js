import React, { Component } from 'react';

class Nav extends Component {

  render() {
    return (
        <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                <a className="navbar-brand" href="#">
                    <span className="glyphicon glyphicon-picture"></span> Photo Browser
                </a>
                </div>
            </div>
        </nav>
    );
  }

  
}

export default Nav;
