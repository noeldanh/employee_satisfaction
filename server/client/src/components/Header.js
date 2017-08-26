import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Payments from './Payments';

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <div>
            <li>
              <a href="/auth/google">Home</a>
            </li>
            <li>
              <a href="/auth/google">About</a>
            </li>
            <li>
              <a href="/auth/google">Surveys</a>
            </li>
            <li>
              <a href="/auth/google">Login</a>
            </li>
          </div>
        );
      default:
        return [
          <li key="1">
            <Payments />
          </li>,
          <li key="3" style={{ margin: '0 10px' }}>
            Credits: {this.props.auth.credits}
          </li>,
          <li key="2">
            <a href="/api/logout">Logout</a>
          </li>
        ];
    }
  }

  render() {
    return (
      // <div className="container">
      <nav>
        <div className="nav-wrapper teal lighten-2">
          <div className="container">
            <Link
              // if this is truthy go to surveys if falsey go to /
              to={this.props.auth ? '/surveys' : '/'}
              className="left brand-logo"
            >
              Emaily
            </Link>
            <ul className="right">
              {this.renderContent()}
            </ul>
          </div>
        </div>
      </nav>
      // </div>
    );
  }
}
// $(document).ready(function(){
//     console.log('hello world')

// })

function mapStateToProps(state) {
  return { auth: state.auth };
}

// function mapStateToProps(auth) {
//     return { auth }
// }

export default connect(mapStateToProps)(Header);
