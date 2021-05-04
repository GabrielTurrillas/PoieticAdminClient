import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { PatientInfoContainer, PatientInfoTitle, PatientInfoSpan, WrapperPatientInfo } from './PatientInfoElements'
import { getTherapistsList, getTherapiesList } from '../../redux/actions/therapistsActions'

const PatientInfo = () => {
  const disptch = useDispatch()
  const patient = useSelector(state => state.patientReducer.patient)
  const therapists = useSelector(state => state.therapistsReducer.therapists)
  const therapies = useSelector(state => state.therapyReducer.therapies)
  const { prevision, telefono, motivoConsulta, email } = patient
  
  const terapeutaDePaciente = (terapias, idPaciente, terapeutas) => {
    const terapia = terapias.find(terapia => terapia.paciente === idPaciente)
    if (!terapia) {
        return 'No Derivado'
    }
    const terapeuta = terapeutas.find(terapeuta => terapeuta.id === terapia.userAccount)
    if (!terapeuta){
        return 'undefined'
    }
    const nombreTerapeuta = terapeuta.nombre + " " + terapeuta.apellidoPaterno
    return nombreTerapeuta
  }

  useEffect(()=>{
    disptch(getTherapistsList())
    disptch(getTherapiesList())
  },[patient, disptch])

  return (
    <PatientInfoContainer>
      <WrapperPatientInfo>  
        <PatientInfoTitle>Profecional</PatientInfoTitle>
        <PatientInfoSpan>{terapeutaDePaciente(therapies, patient.id, therapists)}</PatientInfoSpan>
      </WrapperPatientInfo>
      <WrapperPatientInfo>
        <PatientInfoTitle>Previsión</PatientInfoTitle>
        <PatientInfoSpan>{prevision}</PatientInfoSpan>
      </WrapperPatientInfo>
      <WrapperPatientInfo>
        <PatientInfoTitle>Telefono</PatientInfoTitle>
        <PatientInfoSpan>{telefono}</PatientInfoSpan>
      </WrapperPatientInfo>
      <WrapperPatientInfo>  
        <PatientInfoTitle>Email</PatientInfoTitle>
        <PatientInfoSpan>{email}</PatientInfoSpan>
      </WrapperPatientInfo>
      <WrapperPatientInfo>  
        <PatientInfoTitle>Motivo de Consulta</PatientInfoTitle>
        <PatientInfoSpan>{motivoConsulta}</PatientInfoSpan>
      </WrapperPatientInfo>
    </PatientInfoContainer>
  )
}

export default PatientInfo
