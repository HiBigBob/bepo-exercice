import React, { Component } from 'react'
import Ticker     from './Ticker'

export default class LeftMenu extends Component {
    render() {
        const { practice, restartPractice, ticker } = this.props
        let success = Math.round(practice.iterator * 100 / practice.text.length);
        let error = Math.round(practice.error * 100 / practice.text.length);

        return (
            <div>
                <div className="widget">
                    <div className="widget-header">
                            <h3>John Doe</h3>
                    </div>
                    <div className="widget-body">
                        <p>Hello.. Iam a frontend developer.</p>
                    </div>
                </div>
                <div className="widget">
                    <div className="widget-header">
                            <h3>Action</h3>
                    </div>
                    <div className="widget-body">
                        <ul className="author-menus">
                            {!practice.completed ? 
                            <li><a href="#" onClick={() => restartPractice(practice.id)}>Recommencer</a></li>
                            : ''}
                        </ul>
                    </div>
                </div>
                <div className="widget">
                    <div className="widget-header">
                            <h3>Résultat</h3>
                    </div>
                    <div className="widget-body">
                        Avancement
                        <div className="progress">
                            <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow={{success}} aria-valuemin="0" aria-valuemax="100" style={{minWidth: success + 'em'}} style={{width: success + '%'}}>
                                { success + '%' }
                            </div>
                        </div>
                        Erreur
                        <div className="progress">
                            <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow={{error}} aria-valuemin="0" aria-valuemax="100" style={{minWidth: error + 'em'}} style={{width: error + '%'}}>
                                { error + '%' }
                            </div>
                        </div>
                        <Ticker ticker={ticker} />
                        {practice.completed ? 
                            <span className="label label-success">Completed</span>
                            : 
                            ''
                        }
                    </div>
                </div>
            </div>
        )
  }
}