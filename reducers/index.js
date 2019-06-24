import { combineReducers } from 'redux';
import auth from './auth_reducer'
import error from './errorReducer'

export default combineReducers({
  auth,
  error
})