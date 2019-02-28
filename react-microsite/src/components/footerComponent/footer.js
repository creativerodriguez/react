import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer>
        <nav class="nav">
            <a class="nav-link active" href="/">Active</a>
            <a class="nav-link" href="/">Link</a>
            <a class="nav-link" href="/">Link</a>
            <a class="nav-link disabled" href="/" tabindex="-1" aria-disabled="true">Disabled</a>
        </nav>
      </footer>
    );
  }
}

export default Footer;
