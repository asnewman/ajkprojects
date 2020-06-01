import React, { Component } from "react";
import ReactMarkdown from "react-markdown";

import AboutMeMd from "../md/AboutMe";

class AboutMe extends Component {
  render() {
    return (
      <div className="AboutMe">
        <ReactMarkdown source={AboutMeMd} escapeHtml={false} />
      </div>
    );
  }
}

export default AboutMe;
