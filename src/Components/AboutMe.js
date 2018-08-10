import React, { Component } from 'react';

class AboutMe extends Component {
   render() {
      return (
         <div className="AboutMe">
            <p>
               <strong>Hello. </strong>
               My name is Ashley Newman and I am
               a Software Engineer from California.
               I was born in Tokyo, Japan and grew up in Hawaii.
               In addition, I graduated from California Polytechnic State University
               San Luis Obispo (Cal Poly) with a degree in Software Engineering.
               My main interest in the field is
               front-end development with a focus in
               React. I also dabble in mixing programming
               and stock trading.
            </p>
            <p>
               <a href="https://github.com/asnewman">
               Here is my Github profile</a> where you can find
               my most up to date projects. Below you will
               also find short descriptions of my projects
               (although it may not be up to date).
            </p>
         </div>
      );
   }
}

export default AboutMe;
