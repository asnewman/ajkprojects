import React, {Component} from 'react';

class Nav extends Component {
   render() {
      return (
         <div className="Nav">
            <ul>
               <li><a href="https://s3-us-west-2.amazonaws.com/www.ajkprojects.com/img/Ashley+Newman+Resume.pdf">
               Resume</a></li>
               <li><a title="Coming soon, maybe...">Blog</a></li>
            </ul>
         </div>
      );
   }
}


export default Nav;
