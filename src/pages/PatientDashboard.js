import React from 'react'
import { useSelector } from 'react-redux'
import Background from '../components/Background'
import Title from '../components/Title'
import TitleBubble from '../components/TitleBubble'
import InfoBubble from '../components/InfoBubble'
import ListBubble from '../components/ListBubble'
import DownSection from '../components/DownSection'
import PatientList from '../components/PatientList'
import PatientInfo from '../components/PatientInfo'
import PatientTitleSection from '../components/PatientTitleSection'
import InfoButton from '../components/InfoButton'

const PatientDashboard = () => {
  const { id } = useSelector(state => state.patientReducer.patient)
  return (
    <>
      <Background>
        <TitleBubble>
          <Title>Pacientes</Title>
        </TitleBubble>
        <PatientTitleSection />
        <DownSection>
          <InfoBubble>
            <PatientInfo />
            <div style={{display: 'flex'}}>
              <InfoButton path={`/derivacion/${id}`} >DERIVAR</InfoButton>
              <InfoButton path={`/ficha/${id}`} >VER FICHA</InfoButton>
            </div>
          </InfoBubble>
          <ListBubble>
            <PatientList/>
          </ListBubble>
        </DownSection>
      </Background>
    </>
  )
}

export default PatientDashboard
