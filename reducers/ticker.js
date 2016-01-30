import { TICKER_TICK } from '../constants/iActionTypes'

export default function ticker(state = 0, action) {
  switch (action.type) {
    case TICKER_TICK:
      	return state + 1;

    default:
      return state
  }
}
