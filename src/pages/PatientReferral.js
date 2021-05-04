import React from 'react'
import Background from '../components/Background'
import TitleBubble from '../components/TitleBubble'
import Title from '../components/Title'
import FullBubble from '../components/FullBubble'
import PatientFile from '../components/PatientFile'
import Referral from '../components/Referral'

const PatientReferral = () => {
  return (
    <>
      <Background>
        <TitleBubble>
          <Title>Derivacion de Paciente</Title>
        </TitleBubble>
        <FullBubble>
          <PatientFile />
          <Referral />
        </FullBubble>
      </Background>
    </>
  )
}

export default PatientReferral
