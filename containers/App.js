import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../components/Header'
import MainSection from '../components/MainSection'
import Footer from '../components/Footer'
import * as PracticeActions from '../actions/practices'
import * as TickerActions from '../actions/ticker'
import * as AuthenticateActions from '../actions/authenticate'

class App extends Component {
  render() {
    const { practices, actions, ticker, actionsTicker } = this.props
    return (
      <div className="wrapper">
        <Header />
        <MainSection practices={practices} ticker={ticker} actions={actions} actionsTicker={actionsTicker} />
        <Footer />
      </div>
    )
  }
}

App.propTypes = {
  practices: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  ticker: PropTypes.number.isRequired,
  actionsTicker: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    practices: state.practices,
    ticker: state.ticker,
    authenticate: state.authenticate
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(PracticeActions, dispatch),
    actionsTicker: bindActionCreators(TickerActions, dispatch),
    actionsAuthenticate: bindActionCreators(AuthenticateActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
