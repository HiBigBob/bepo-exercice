import { combineReducers } from 'redux'
import todos from './todos'
import practices from './practices'
import ticker from './ticker'

const rootReducer = combineReducers({
  practices,
  ticker
})

export default rootReducer
