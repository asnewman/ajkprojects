import React, {Component} from 'react';
import ReactMarkdown from 'react-markdown';

import Kozo from "../md/Kozo.js";
import LeagueRatings from "../md/LeagueRatings.js";
import TransUnion from "../md/TransUnion.js";
import BillBody from "../md/BillBody.js";
import StockDog from "../md/StockDog.js";
import Pickmo from "../md/Pickmo.js";

class Project extends Component {
   render() {
      return (
         <div className="Project">
            <ReactMarkdown source={StockDog} escapeHtml={false} />
            <ReactMarkdown source={Kozo} escapeHtml={false} />
            <ReactMarkdown source={Pickmo} escapeHtml={false} />
            <ReactMarkdown source={TransUnion} escapeHtml={false} />
            <ReactMarkdown source={BillBody} escapeHtml={false} />
            <ReactMarkdown source={LeagueRatings} escapeHtml={false} />
         </div>
      );
   }
}

export default Project;
