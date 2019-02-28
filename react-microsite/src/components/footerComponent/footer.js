import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer>
        <nav className="nav">
            <a className="nav-link active" href="/">Active</a>
            <a className="nav-link" href="/">Link</a>
            <a className="nav-link" href="/">Link</a>
            <a className="nav-link disabled" href="/" tabIndex="-1" aria-disabled="true">Disabled</a>
        </nav>
      </footer>
    );
  }
}

export default Footer;
