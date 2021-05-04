import {
  CHANGE_PAGE,
  ENTER_TOTAL_ITEMS,
} from '../actions/types'

const initialState = {
  currentPage:1,
  itemsPerPage:10,
  totalItems:0,
};

const paginationReducer = (state=initialState, action) => {
  switch (action.type) {
    case CHANGE_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      }
    case ENTER_TOTAL_ITEMS:
      return {
        ...state,
        totalItems:action.payload,
      }
    default:
      return state
  }
}

export default paginationReducer