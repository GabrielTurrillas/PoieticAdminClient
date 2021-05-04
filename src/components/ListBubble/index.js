import React from 'react'
import { ListBubbleWrapper, ListBubbleZone, Wrapper } from './ListBubbleElement'
import Pagination from '../Pagination'

const ListBubble = (props) => {
  return (
    <Wrapper>
      <ListBubbleWrapper>
        <ListBubbleZone>
          {props.children}
        </ListBubbleZone>
      </ListBubbleWrapper>
      <Pagination />  
    </Wrapper>
  )
}

export default ListBubble
