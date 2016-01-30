import * as types from '../constants/iActionTypes'

export function login(login, password) {
  return { type: types.LOGIN, login, password }
}

export function register(login, password) {
  return { type: types.REGISTER, login, password }
}