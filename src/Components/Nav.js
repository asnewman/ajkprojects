import React, { Component } from "react";

class Nav extends Component {
  render() {
    return (
      <div className="Nav">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/blog" title="Coming soon, maybe...">
              Blog
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Nav;
