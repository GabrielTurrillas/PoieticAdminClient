import React from 'react'
import { Button, InfoButtonContainer } from './InfoButtonElements'

const InfoButton = (props) => {
  return (
    <InfoButtonContainer>
      <Button to={props.path}>
        {props.children}
      </Button>
    </InfoButtonContainer>
  )
}

export default InfoButton
