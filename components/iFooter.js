import React, { PropTypes, Component } from 'react'

class Footer extends Component {
  render() {
    return (
         <div className="footer">
            <div className="container">
            <ul className="pull-left footer-menu">
                <li>
                    <a href=""> Accueil </a>
                    <a href=""> A propos </a>
                    <a href=""> Contactez moi </a>
                </li>
            </ul>
            <ul className="pull-right footer-menu">
                <li> © 2015 Adrien Bouttier </li>
            </ul>
            </div>
        </div>
    )
  }
}

export default Footer
