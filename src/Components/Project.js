import React, {Component} from 'react';

import github from '../img/github-logo.svg';

class Project extends Component {
   render() {
      return (
         <div className="Project">
            <div className="proj-title">
               <h1>
                  Kozo
               </h1>
               <div className="proj-link">
                  <a href="https://github.com/asnewman/Kozo">
                     <img alt="Github Logo" src={github} />
                  </a>
               </div>
            </div>
            <p>
               Kozo is an extended, commandline shell version
               of the stock broker app Robinhood. Additional
               features such as a trailing stoploss are made
               using <a href="https://github.com/sanko/Robinhood">
               Robinhood's unofficial API</a>. 
               These features aim to trade stocks with less 
               requirement for human interaction.
            </p>
         </div>
      );
   }
}

export default Project;
