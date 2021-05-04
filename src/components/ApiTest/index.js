import React,{ useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getPatientList } from '../../redux/actions/patientActions'

const ApiTest = () => {
  const patients = useSelector(state => state.patientReducer.patients)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getPatientList())
  },[dispatch])
  return (
    <>
      {console.log(patients)}
    </>
  )
}

export default ApiTest
