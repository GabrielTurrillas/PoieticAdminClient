import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPatientList, sendInfo } from '../../redux/actions/patientActions'
import { enterTotalItems } from '../../redux/actions/paginationActions'
import { PatientListContainer, PatientListUl, PatientLi, ListNombre } from './PatientListElements'


const PatientList = () => {
  const patients = useSelector(state => state.patientReducer.patients)
  const currentPage = useSelector(state => state.paginationReducer.currentPage)
  const itemsPerPage = useSelector(state => state.paginationReducer.itemsPerPage)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPatientList())
  },[dispatch])
  
    //Give total of items to pagination
  dispatch(enterTotalItems(patients.length))

    //Items rendered to the page
  const indexOfLastPatient = currentPage * itemsPerPage
  const indexOfFirstPatient = indexOfLastPatient - itemsPerPage
  const currentPatients = patients.slice(indexOfFirstPatient, indexOfLastPatient)

  return (
    <PatientListContainer>
      <PatientListUl>
        {currentPatients && currentPatients.map((currentPatient) => (
          <PatientLi key={currentPatient.id}>
            <ListNombre  onClick={() => dispatch(sendInfo(currentPatient))}>
              {currentPatient.nombre} {currentPatient.apellidoPaterno}
            </ListNombre>
          </PatientLi>
        ))}
      </PatientListUl>
    </PatientListContainer>
  )
}

export default PatientList
