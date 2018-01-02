import React, {Component} from 'react';
import ReactMarkdown from 'react-markdown';

import github from '../img/github-logo.svg';

const md = `
# Kozo [<img alt="github logo" src="https://s3-us-west-2.amazonaws.com/www.ajkprojects.com/img/github-logo-big.png" width="25">](https://github.com/asnewman/Kozo)
Kozo is an extended, commandline shell version of the stock broker app Robinhood. Additional features such as a trailing stoploss are made using [Robinhood's unofficial API](https://github.com/sanko/Robinhood). These features aim to trade stocks with less requirement for human interaction.
`;

class Project extends Component {
   render() {
      return (
         <div className="Project">
            <ReactMarkdown source={md} escapeHtml={false} />
         </div>
      );
   }
}

export default Project;
