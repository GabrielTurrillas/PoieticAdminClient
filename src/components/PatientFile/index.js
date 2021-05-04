import React from 'react'
import { useSelector } from 'react-redux'
import { PatientFileContainer, PatientFileWrapper, PatientFileTitle, PatientFileSpan, Col1, Col2 } from './PatientFileElements'

const PatientFile = () => {
  const { 
          rut, 
          nombre, 
          genero, 
          apellidoMaterno, 
          apellidoPaterno, 
          captacion, 
          valorSesion, 
          direccion, 
          fechaNacimiento, 
          telefono, 
          email, 
          prevision
        } = useSelector(state => state.patientReducer.patient)
  return (
    <PatientFileContainer>
      <Col1>
        <PatientFileWrapper>
          <PatientFileTitle>Rut</PatientFileTitle>
          <PatientFileSpan>{rut}</PatientFileSpan>
        </PatientFileWrapper>
        <PatientFileWrapper>
          <PatientFileTitle>Nombre</PatientFileTitle>
          <PatientFileSpan>{nombre}</PatientFileSpan>
        </PatientFileWrapper>
        <PatientFileWrapper>
          <PatientFileTitle>Apellido Paterno</PatientFileTitle>
          <PatientFileSpan>{apellidoPaterno}</PatientFileSpan>
        </PatientFileWrapper>
        <PatientFileWrapper>
          <PatientFileTitle>Apellido Materno</PatientFileTitle>
          <PatientFileSpan>{apellidoMaterno}</PatientFileSpan>
        </PatientFileWrapper>
        <PatientFileWrapper>
          <PatientFileTitle>Genero</PatientFileTitle>
          <PatientFileSpan>{genero}</PatientFileSpan>
        </PatientFileWrapper>
        <PatientFileWrapper>
          <PatientFileTitle>Fecha de Nacimiento</PatientFileTitle>
          <PatientFileSpan>{fechaNacimiento}</PatientFileSpan>
        </PatientFileWrapper>
      </Col1>
      <Col2>
        <PatientFileWrapper>
          <PatientFileTitle>Telefono</PatientFileTitle>
          <PatientFileSpan>{telefono}</PatientFileSpan>
        </PatientFileWrapper>
        <PatientFileWrapper>
          <PatientFileTitle>Email</PatientFileTitle>
          <PatientFileSpan>{email}</PatientFileSpan>
        </PatientFileWrapper>
        <PatientFileWrapper>
          <PatientFileTitle>Direccion</PatientFileTitle>
          <PatientFileSpan>{direccion}</PatientFileSpan>
        </PatientFileWrapper>
        <PatientFileWrapper>
          <PatientFileTitle>Captacion</PatientFileTitle>
          <PatientFileSpan>{captacion}</PatientFileSpan>
        </PatientFileWrapper>
        <PatientFileWrapper>
          <PatientFileTitle>Prevision</PatientFileTitle>
          <PatientFileSpan>{prevision}</PatientFileSpan>
        </PatientFileWrapper>
        <PatientFileWrapper>
          <PatientFileTitle>Valor Sesion</PatientFileTitle>
          <PatientFileSpan>{valorSesion}</PatientFileSpan>
        </PatientFileWrapper>
      </Col2>      
    </PatientFileContainer>
  )
}

export default PatientFile
