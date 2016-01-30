import React, { PropTypes, Component } from 'react'
import BreadCrumb   from './BreadCrumb'
import LeftMenu     from './LeftMenu'
import KeyBoard     from './KeyBoard'

class MainSection extends Component {
    constructor(props, context) {
        super(props, context)
    }

    render() {
        const { practices, actions, actionsTicker, ticker } = this.props
        
        return (
            <section className="main">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <BreadCrumb />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3 col-sm-3 col-lg-3">
                            {practices.map(practice =>
                                <LeftMenu key={practice.id} practice={practice} ticker={ticker} {...actions} {...actionsTicker} />
                            )}
                        </div>
                        <div className="col-md-8 col-sm-8 col-lg-8">
                            {practices.map(practice =>
                                <KeyBoard key={practice.id} practice={practice} ticker={ticker} {...actions} {...actionsTicker} />
                            )}
                        </div>
                        <div className="col-md-1 col-sm-1 col-lg-1">
                        </div>
                    </div> 
                </div> 
            </section>
        )
    }
}

MainSection.propTypes = {
  practices: PropTypes.array.isRequired,
  ticker: PropTypes.number.isRequired,
  actions: PropTypes.object.isRequired,
  actionsTicker: PropTypes.object.isRequired
}

export default MainSection