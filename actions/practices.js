import * as types from '../constants/ActionTypes'

export function addPractice(text) {
  return { type: types.ADD_PRACTICE, text }
}

export function editPractice(id, text) {
  return { type: types.EDIT_PRACTICE, id, text }
}

export function incrementPractice(id) {
  return { type: types.INCREMENT_ITERATOR_PRACTICE, id }
}

export function decrementPractice(id) {
  return { type: types.DECREMENT_ITERATOR_PRACTICE, id }
}

export function errorPractice(id) {
  return { type: types.ERROR_PRACTICE, id }
}

export function completePractice(id) {
  return { type: types.COMPLETE_PRACTICE, id }
}

export function restartPractice(id) {
  return { type: types.RESTART_PRACTICE, id }
}

