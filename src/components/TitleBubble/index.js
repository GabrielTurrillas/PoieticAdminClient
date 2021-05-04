import React from 'react'
import { TitleBubbleWrapper } from './TitleWrapperElements'

const TitleBubble = (props) => {
  return (
    <TitleBubbleWrapper>
      {props.children}
    </TitleBubbleWrapper>
  )
}

export default TitleBubble
