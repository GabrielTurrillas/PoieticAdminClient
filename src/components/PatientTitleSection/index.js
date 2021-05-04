import React from 'react'
import { useSelector } from 'react-redux'
import { Col1, TitleH2, Col2, Wrapper } from './TitleSectionElements'

const PatientTitleSection = () => {
  const { nombre, apellidoPaterno } = useSelector(state => state.patientReducer.patient)
  return (
    <Wrapper>
      <Col1>
        <TitleH2>
          {nombre} {apellidoPaterno}
        </TitleH2>
      </Col1>
      <Col2>
        <TitleH2>
          Nombre
        </TitleH2>
      </Col2>
    </Wrapper>
  )
}

export default PatientTitleSection
