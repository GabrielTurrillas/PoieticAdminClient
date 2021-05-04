import axios from '../../axios'
import {
  GET_THERAPISTS_SUCCESS,
  GET_THERAPISTS_FAILURE,
  SEND_THERAPIST,
  MAKE_REFERRAL_SUCCESS,
  MAKE_REFERRAL_FAILURE,
  GET_THERAPIES_SUCCESS,
  GET_THERAPIES_FAILURE,
} from './types'

const config = {
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
}

export const getTherapistsList = () => async dispatch => {
  axios.get('/api/terapeuta/listPerfilTerapeuta', config)
  .then(res => {
    dispatch({
      type: GET_THERAPISTS_SUCCESS,
      payload: res.data
    })
  })
  .catch(err => {
    dispatch({
      type: GET_THERAPISTS_FAILURE,
      payload: err.data
    })
  })
}

export const getTherapiesList = () => async dispatch => {
  axios.get('/api/terapia/listTerapia', config)
  .then(res => {
    dispatch({
      type: GET_THERAPIES_SUCCESS,
      payload: res.data
    })
  })
  .catch(err => {
    dispatch({
      type: GET_THERAPIES_FAILURE,
      payload: err.data
    })
  })
}

export const sendTherapist = (therapistId) => dispatch => {
  dispatch({
    type: SEND_THERAPIST,
    payload: therapistId
  })
}

export const makeReferral = (body) => async dispatch => {
  axios.post("/api/terapia/createTerapia", body, config)
  .then(res => {
    dispatch({
      type: MAKE_REFERRAL_SUCCESS,
      payload: res.data
    })
  })
  .catch(err => {
    dispatch({
      type: MAKE_REFERRAL_FAILURE,
      payload: err.data
    })
  })
}