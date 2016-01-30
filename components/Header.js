import React, { PropTypes, Component } from 'react'

export default class Header extends Component {
  render() {
    return (
        <header className="navbar navbar-default navbar-fixed-top navbar-top">
            <div className="container">
                <div className="navbar-header">
                    <button data-target=".navbar-collapse" data-toggle="collapse" className="navbar-toggle" type="button">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a href="" className="navbar-brand"><span className="logo"><i className="fa fa-keyboard-o "></i> Bépo</span> Entrainement</a>
                </div>

                <div className="navbar-collapse collapse">
                    <ul className="nav navbar-nav navbar-right">
                        <li><a href="">Signup</a></li>
                        <li className="dropdown">
                            <a className="dropdown-toggle" href="#" data-toggle="dropdown"><i className="fa fa-user"></i> <strong className="caret"></strong>&nbsp;</a>
                            <div className="dropdown-menu dropdown-login">
                                <form>                       
                                    <div className="form-group">
                                        <div className="input-group">
                                            <span className="input-group-addon addon-login"><i className="fa fa-user"></i></span>
                                            <input type="text" placeholder="Username or email" required="required" className="form-control input-login" />                                            
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="input-group">
                                            <span className="input-group-addon addon-login"><i className="addon fa fa-lock"></i></span>
                                            <input type="password" placeholder="Password" required="required" className="form-control input-login" />                                            
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="checkbox">
                                            <label className="string optional" htmlFor="user_remember_me">
                                                <input type="checkbox" id="user_remember_me" />
                                                Remember me
                                            </label>
                                        </div>
                                    </div>
                                    <input type="submit" className="btn btn-custom btn-block" value="Sign In" />
                                    <a href="" className="btn-block text-center">Forgot password?</a>
                                </form>                                    
                            </div>
                        </li>

                    </ul>
                </div>
            </div>
        </header>
    )
  }
}
