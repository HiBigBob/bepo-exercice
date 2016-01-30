'use strict';

import React, { Component, PropTypes } from 'react'

export default class Login extends Component {
  constructor(props, context) {
      super(props, context)
  }

  loginHandler() {
    const { login } = this.props
        
    login(this.refs.username.value, this.refs.password.value);
  }

  render() {
    return (
    <div className="content overflow-hidden">
        <div className="row">
            <div className="col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 col-lg-4 col-lg-offset-4">
                <div className="block block-themed animated fadeIn">
                    <div className="block-content block-content-full block-content-narrow">
                        <h1 className="h2 font-w600 push-30-t push-5">Brain</h1>
                        <p>Welcome, please login.</p>
                        <div className="js-validation-login form-horizontal push-30-t push-50" >
                            <div className="form-group">
                                <div className="col-xs-12">
                                    <div className="form-material form-material-primary floating">
                                        <input
                                          className="form-control"
                                          type="text"
                                          id="username"
                                          name="username"
                                          ref="username" />
                                        <label for="username">Username</label>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-xs-12">
                                    <div className="form-material form-material-primary floating">
                                        <input
                                          className="form-control"
                                          type="password"
                                          id="password"
                                          name="password"
                                          ref="password" />
                                        <label for="password">Password</label>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-xs-12 col-sm-6 col-md-4">
                                    <button className="btn btn-block btn-primary" onClick={this.loginHandler.bind(this)}><i class="si si-login pull-right"></i> Log in</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
  }
}
