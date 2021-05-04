import React from 'react'
import { BackgroundArea, BackgroundContainer } from './BackgroundElements';

const Background = (props) => {
  return (
    <BackgroundArea>
      <BackgroundContainer>
        {props.children}
      </BackgroundContainer>
    </BackgroundArea>
  )
}

export default Background
