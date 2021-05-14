import styled from 'styled-components'

export const PatientListContainer = styled.div`
  height: 100%;
  width: 100%;
`

export const PatientListUl = styled.ul`
`

export const PatientLi = styled.li`
  display: flex;
  padding:6.9px;
  margin:5px 0;
  border-bottom: 1px solid rgba(0,0,0,0.1);
  &:last-child {
    border-bottom: none;
  }
`

export const ListNombre = styled.button`
  background: none;
  border: none;
  display:flex;
  font-family: 'Didact Gothic', sans-serif;
  color:#000;
  font-size: 20px;
  opacity: .4;
  padding: 15px;
  padding-left: 30px;
  text-decoration: none;
  &:focus {
    background:rgba(8,0,255,0.09);
    border-radius:50px;
    cursor: pointer;
    width:100%;
  }
  &:active {
    background:rgba(8,0,255,0.09);
    border-radius:50px;
    cursor: pointer;
    width:100%;
    &:hover {
      background:rgba(8,0,255,0.09);
      border-radius:50px;
      cursor: pointer;
      width:100%;
    }
  }
  &:hover {
    background:rgba(0,0,0,0.1);
    border-radius:50px;
    cursor: pointer;
    width:100%;
    &:focus {
      background:rgba(8,0,255,0.09);
      border-radius:50px;
      cursor: pointer;
      width:100%;
    }
  }

`