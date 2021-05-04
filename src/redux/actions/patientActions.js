import axios from '../../axios'
import {
  LIST_PATIENTS_SUCCESS,
  LIST_PATIENTS_FAILURE,
  SEND_INFO,
} from './types'

export const getPatientList = () => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  }

  axios.get('/api/paciente/listPaciente', config)
  .then(res => {
    dispatch({
      type: LIST_PATIENTS_SUCCESS,
      payload: res.data
    })
  })
  .catch(err => {
    dispatch({
      type: LIST_PATIENTS_FAILURE,
      payload: err.data
    })
  })
}

export const sendInfo = (currentPatient) => dispatch => {
  dispatch({
    type: SEND_INFO,
    payload: currentPatient
  })
}
