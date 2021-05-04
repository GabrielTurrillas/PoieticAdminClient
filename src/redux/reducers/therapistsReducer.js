import {
  GET_THERAPISTS_SUCCESS,
  GET_THERAPISTS_FAILURE,
  SEND_THERAPIST,
} from '../actions/types'

const initialState = {
  therapists: [],
  errors: '',
  therapistIdReferral:0,
};

const therapistsReducer = (state=initialState, action) => {
  switch (action.type) {
    case GET_THERAPISTS_SUCCESS:
      return {
        ...state,
        therapists: action.payload
      }
    case GET_THERAPISTS_FAILURE:
      return {
        ...state,
        errors: action.payload,
      }
    case SEND_THERAPIST:
      return {
        ...state,
        therapistIdReferral: action.payload,
      }
    default:
      return state
  }
}

export default therapistsReducer