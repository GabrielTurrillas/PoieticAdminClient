import React from 'react'
import Background from '../components/Background'
import TitleBubble from '../components/TitleBubble'
import Title from '../components/Title'
import FullBubble from '../components/FullBubble'
import PatientFile from '../components/PatientFile'

const PatientFilePage = () => {
  return (
    <>
      <Background>
        <TitleBubble>
          <Title>Ficha de Paciente</Title>
        </TitleBubble>
        <FullBubble>
          <PatientFile />
        </FullBubble>
      </Background>
    </>
  )
}

export default PatientFilePage
