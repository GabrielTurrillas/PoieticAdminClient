import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { UlPagination, LiPagination, LinkPagination, PaginationBubble } from './PaginationElements'
import { changePage } from '../../redux/actions/paginationActions'

// To use Pagination the total of items has to be provided by the list component to the store 
const Pagination = () => {
  const itemsPerPage = useSelector(state => state.paginationReducer.itemsPerPage)
  const totalItems = useSelector(state => state.paginationReducer.totalItems)
  const pageNumbers = []
  const dispatch = useDispatch()

  for(let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i)
  }
  const paginate = pageNumber => dispatch(changePage(pageNumber))
  return (
      <PaginationBubble>
        <UlPagination>
          {pageNumbers.map(number => (
            <LiPagination key={number} onClick={() => paginate(number)}>
              <LinkPagination to='#!'>
                {number}
              </LinkPagination>
            </LiPagination>
          ))}
        </UlPagination>
      </PaginationBubble>
  )
}

export default Pagination

