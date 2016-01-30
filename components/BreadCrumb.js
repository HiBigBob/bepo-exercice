import React, { PropTypes, Component } from 'react'

export default class BreadCrumb extends Component {
  render() {
    return (
        <ul className="breadcrumb pull-left">
            <li><a href="">Accueil</a></li>
            <li>Entrainement</li>
        </ul>
    )
  }
}