import React from 'react'
import { InfoBubbleWrapper, InfoBubbleZone } from './InfoBubbleElements'

const InfoBubble = (props) => {
  return (
    <>
      <InfoBubbleWrapper>
        <InfoBubbleZone>
          {props.children}
        </InfoBubbleZone>
      </InfoBubbleWrapper>
    </>
  )
}

export default InfoBubble
