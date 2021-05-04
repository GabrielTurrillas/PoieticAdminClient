import axios from '../../axios'
import {
  CREATE_THERAPY_SUCCESS,
  CREATE_THERAPY_FAILURE,
  PUT_THERAPY_SUCCESS,
  PUT_THERAPY_FAILURE,
  RETRIEVE_THERAPY_SUCCESS,
  RETRIEVE_THERAPY_FAILURE,
} from './types'

const config = {
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
}

export const postCreateTherapy = (body) => async dispatch => {
  axios.post('/api/terapia/createTerapia', body, config)
  .then(res => {
    dispatch({
      type: CREATE_THERAPY_SUCCESS,
      payload: res.data
    })
  })
  .catch(err => {
    dispatch({
      type: CREATE_THERAPY_FAILURE,
      payload: err.data
    })
  })
} 

export const putUpdateTherapy = (id, body) => async dispatch => {
  axios.put(`/api/terapia/updateTerapia/${id}`, body, config)
  .then(res => {
    dispatch({
      type: PUT_THERAPY_SUCCESS,
      payload: res.data
    })
  })
  .catch(err => {
    dispatch({
      type: PUT_THERAPY_FAILURE,
      payload: err.data
    })
  })
}

export const retrieveTherapy = (idPatient) => async dispatch => {
  axios.get('/api/terapia/retrieveTerapia/'+idPatient, config)
  .then(res => {
    dispatch({
      type: RETRIEVE_THERAPY_SUCCESS,
      payload: res.data
    })
  })
  .catch(err => {
    dispatch({
      type: RETRIEVE_THERAPY_FAILURE,
      payload: err.data
    })
  })
}