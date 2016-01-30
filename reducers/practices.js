import { ADD_PRACTICE, EDIT_PRACTICE, INCREMENT_ITERATOR_PRACTICE, DECREMENT_ITERATOR_PRACTICE, ERROR_PRACTICE, COMPLETE_PRACTICE, RESTART_PRACTICE, TIMER_TICK, TIMER_STARTED } from '../constants/iActionTypes'

const initialState = [
  {
    text: 'Use Redux',
    completed: false,
    iterator: 0,
    error: 0,
    timer: 0,
    id: 0
  }
]

export default function practices(state = initialState, action) {
  switch (action.type) {
    case ADD_PRACTICE:
      return [
        {
          id: state.reduce((maxId, practice) => Math.max(practice.id, maxId), -1) + 1,
          completed: false,
          text: action.text,
          iterator: 0,
          error: 0
        }, 
        ...state
      ]

    case EDIT_PRACTICE:
      return state.map(practice =>
        practice.id === action.id ?
          Object.assign({}, practice, { iterator: action.text }) :
          practice
      )

    case INCREMENT_ITERATOR_PRACTICE:
      return state.map(practice =>
        practice.id === action.id ?
          Object.assign({}, practice, { iterator: practice.iterator + 1 }) :
          practice
      )

    case DECREMENT_ITERATOR_PRACTICE:
      return state.map(practice =>
        practice.id === action.id ?
          Object.assign({}, practice, { iterator: practice.iterator - 1 }) :
          practice
      )

    case ERROR_PRACTICE:
      return state.map(practice =>
        practice.id === action.id ?
          Object.assign({}, practice, { error: practice.error + 1 }) :
          practice
      )

    case COMPLETE_PRACTICE:
      return state.map(practice =>
        practice.id === action.id ?
          Object.assign({}, practice, { completed: !practice.completed }) :
          practice
      )

    case RESTART_PRACTICE:
      return state.map(practice =>
        practice.id === action.id ?
          Object.assign({}, practice, { completed: false, iterator: 0, error: 0 }) :
          practice
      )

    case TIMER_TICK:
      return state.map(practice =>
        practice.id === action.id ?
          Object.assign({}, practice, { timer: practice.timer + 1 }) :
          practice
      )

    default:
      return state
  }
}
