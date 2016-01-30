import * as types from '../constants/ActionTypes'

export function startTicker() {
  	return { type: types.TICKER_TICK }
}