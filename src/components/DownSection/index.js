import React from 'react'
import { DownSectionWrapper } from './DownSectionElements';

const DownSection = (props) => {
  return (
    <>
      <DownSectionWrapper>
        {props.children}
      </DownSectionWrapper>
    </>
  )
}

export default DownSection
