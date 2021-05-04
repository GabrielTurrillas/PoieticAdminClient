import {
  CREATE_THERAPY_SUCCESS,
  CREATE_THERAPY_FAILURE,
  PUT_THERAPY_SUCCESS,
  PUT_THERAPY_FAILURE,
  RETRIEVE_THERAPY_SUCCESS,
  RETRIEVE_THERAPY_FAILURE,
  GET_THERAPIES_SUCCESS,
  GET_THERAPIES_FAILURE
} from '../actions/types'

const initialState = {
  therapies:[],
  patientTherapy: {},
  createTherapy:{},
  updateTherapy:{},
  errors:''
};

const therapyReducer = (state=initialState, action) => {
  switch (action.type) {
    case GET_THERAPIES_SUCCESS:
      return {
        ...state,
        therapies: action.payload
      }
    case GET_THERAPIES_FAILURE:
      return {
        ...state,
        errors: action.payload,
      }
    case CREATE_THERAPY_SUCCESS:
      return{
        ...state,
        createTherapy: action.payload
      }
    case CREATE_THERAPY_FAILURE:
      return{
        ...state,
        errors: action.payload 
      }
    case PUT_THERAPY_SUCCESS:
      return{
        ...state,
        updateTherapy: action.payload
      }
    case PUT_THERAPY_FAILURE:
      return{
        ...state,
        errors: action.payload
      }
    case RETRIEVE_THERAPY_SUCCESS:
      return{
        ...state,
        patientTherapy: action.payload,
        errors:''
      }
    case RETRIEVE_THERAPY_FAILURE:
      return{
        ...state,
        errors: action.payload
    }
    default:
      return state
  }
}
  
  export default therapyReducer