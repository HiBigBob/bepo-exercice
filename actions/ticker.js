import * as types from '../constants/iActionTypes'

export function startTicker() {
  	return { type: types.TICKER_TICK }
}