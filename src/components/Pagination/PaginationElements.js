import styled from 'styled-components'

export const UlPagination = styled.ul`
  display:flex;
`
export const LiPagination = styled.li`
  display:flex;
  background:#f9f9f9;
  border-radius:10px;
  padding:10px;
  box-shadow:0 4px 8px 0 rgba(0, 0, 0, 0.2);
  margin-right:20px;
  &:last-of-type {
    margin-right:0;
  }
  &:hover {
    cursor: pointer;
  }
`
export const LinkPagination = styled.button`
  text-decoration:none;
  border: none;
  background: none;
`

export const PaginationBubble = styled.div`
  width:max-content;
  border-radius:10px;
  background:#fff;
  box-shadow:0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding:10px;
`
