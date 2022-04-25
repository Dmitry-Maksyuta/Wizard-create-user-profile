import { combineReducers } from 'redux'
import { registerVM } from './redux/registerVM/reducer'
import { listVM } from './redux/listVM/reducer'

const reducers = {
  listVM,
  registerVM,
}

export const rootReducer = combineReducers(reducers)
