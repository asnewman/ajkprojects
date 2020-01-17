import React, { Component } from "react";
import ReactMarkdown from "react-markdown";

import BlogMd from "../md/Blog";

class Blog extends Component {
  render() {
    return (
      <div className="Blog">
        <ReactMarkdown source={BlogMd} escapeHtml={false} />
      </div>
    );
  }
}

export default Blog;
