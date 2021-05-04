import React from 'react'
import { TitleH1 } from './TitleElements';

const Title = (props) => {
  return (
    <TitleH1>
      {props.children}
    </TitleH1>
  )
}

export default Title
