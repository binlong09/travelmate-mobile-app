import {
  LOGIN_SUCESS,
  LOGIN_FAIL,
  LOADING,
  SIGNUP_SUCCESS,
  SPINNER
} from '../actions/types';
import deviceStorage from '../services/deviceStorage';

const initialState = {
  isLoading: false,
  signedup: false,
  isAuthenticated: false
}

export default function(state = initialState, action) {
  console.log(action)
  switch(action.type) {
    case LOADING:
      return {
        ...state,
        isLoading: true
      }
    case LOGIN_SUCESS:
      return {
        ...state,
        isLoading: false
      }
      case SIGNUP_SUCCESS:
        return {
          ...state,
          isLoading: false,
          signedup: true
        }
      default:
        return initialState;
  }
}