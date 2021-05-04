import {
  CHANGE_PAGE,
  ENTER_TOTAL_ITEMS,
} from './types'

export const changePage = (page) => dispatch => {
  dispatch({
    type: CHANGE_PAGE,
    payload: page
  })
}

export const enterTotalItems = (totalItems) => dispatch => {
  dispatch({
    type: ENTER_TOTAL_ITEMS,
    payload: totalItems
  })
}