import {
  LIST_PATIENTS_SUCCESS,
  LIST_PATIENTS_FAILURE,
  SEND_INFO,
} from '../actions/types'

const initialState = {
  patients:[],
  patient:{},
  errors: {}
};

const patientReducer = (state=initialState, action) => {
  switch (action.type) {
    case LIST_PATIENTS_SUCCESS:
      return {
        ...state,
        patients: action.payload,
        errors: ''
      }
    case LIST_PATIENTS_FAILURE:
      return {
        ...state,
        errors: action.payload
      }
    case SEND_INFO:
      return {
        ...state,
        patient: action.payload,
      }
    default:
      return state
  }
}

export default patientReducer