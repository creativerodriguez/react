import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <header className="Header">
        <div className="logo">
            LOGO
        </div>
        <nav class="nav">
            <a class="nav-link active" href="/">Active</a>
            <a class="nav-link" href="/">Link</a>
            <a class="nav-link" href="/">Link</a>
            <a class="nav-link disabled" href="/" tabindex="-1" aria-disabled="true">Disabled</a>
        </nav>
      </header>
    );
  }
}

export default Footer;
