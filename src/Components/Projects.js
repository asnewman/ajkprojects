import React, { Component } from "react";
import ReactMarkdown from "react-markdown";

import Kozo from "../md/Kozo.js";
import TransUnion from "../md/TransUnion.js";
import NgoHub from "../md/NgoHub.js";
import StockDog from "../md/StockDog.js";
import Pickmo from "../md/Pickmo.js";
import Fooodee from "../md/fooodee.js";

class Project extends Component {
  render() {
    return (
      <div className="Project">
        <ReactMarkdown source={StockDog} escapeHtml={false} />
        <ReactMarkdown source={NgoHub} escapeHtml={false} />
        <ReactMarkdown source={Pickmo} escapeHtml={false} />
        <ReactMarkdown source={TransUnion} escapeHtml={false} />
        <ReactMarkdown source={Kozo} escapeHtml={false} />
      </div>
    );
  }
}

export default Project;
