import * as types from '../constants/ActionTypes'

export function login(login, password) {
  return { type: types.LOGIN, login, password }
}

export function register(login, password) {
  return { type: types.REGISTER, login, password }
}