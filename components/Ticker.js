import React, { PropTypes, Component } from 'react'

class Ticker extends Component {
    constructor(props, context) {
        super(props, context)
    }

    handleTicker(totalSeconds) {
		let hours   = Math.floor(totalSeconds / 3600);
		let minutes = Math.floor((totalSeconds - (hours * 3600)) / 60);
		let seconds = totalSeconds - (hours * 3600) - (minutes * 60);

		seconds = Math.round(seconds * 100) / 100

		let result = (hours < 10 ? "0" + hours : hours);
		  result += ":" + (minutes < 10 ? "0" + minutes : minutes);
		  result += ":" + (seconds  < 10 ? "0" + seconds : seconds);
		return result;
    }

    render() {
    	const { ticker } = this.props
        return (
            <div>
            	Durée <br />
            	{this.handleTicker(ticker)}
            </div> 
        )
    }
}

Ticker.propTypes = {
  ticker: PropTypes.number.isRequired,
}

export default Ticker