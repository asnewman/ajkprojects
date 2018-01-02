import React, {Component} from 'react'
import face from '../img/face.jpg';
import github from '../img/github.png'

class Header extends Component {
   render() {
      return (
         <div className="Header">
            <div className="header-emblem">
                <div className="face">
                    <img alt="My face" src={face}/>
                </div>
                <div className="header-emblem-text">
                    <h1>Ashley Newman</h1>
                    <img className="github" alt="Github" src={github} />
                </div>
            </div>
         </div>
      )
   }
}

export default Header;
