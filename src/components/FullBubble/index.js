import React from 'react'
import { FullBubbleWrapper, FullBubbleZone } from './FullBubbleElements'

const FullBubble = (props) => {
  return (
    <>
      <FullBubbleWrapper>
        <FullBubbleZone>
          {props.children}
        </FullBubbleZone>
      </FullBubbleWrapper>
    </>
  )
}

export default FullBubble
