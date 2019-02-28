import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header>
        <nav className="site-header sticky-top py-1">
          <div className="container d-flex flex-column flex-md-row justify-content-between">
            <a className="py-2 logo" href="/">
              Logo
            </a>
            <a className="py-2 d-none d-md-inline-block" href="/">Tour</a>
            <a className="py-2 d-none d-md-inline-block" href="/">Product</a>
            <a className="py-2 d-none d-md-inline-block" href="/">Features</a>
            <a className="py-2 d-none d-md-inline-block" href="/">Enterprise</a>
            <a className="py-2 d-none d-md-inline-block" href="/">Support</a>
            <a className="py-2 d-none d-md-inline-block" href="/">Pricing</a>
            <a className="py-2 d-none d-md-inline-block" href="/">Cart</a>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
