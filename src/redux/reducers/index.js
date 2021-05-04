import { combineReducers } from 'redux'
import patientReducer from './patientReducer'
import paginationReducer from './paginationReducer'
import therapistsReducer from './therapistsReducer'
import therapyReducer from './therapyReducer'

export default combineReducers({
  patientReducer,
  paginationReducer,
  therapistsReducer,
  therapyReducer,
});