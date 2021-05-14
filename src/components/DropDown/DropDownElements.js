import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`
export const DDButton = styled.button`
  border: none;
  margin-left:20px; 
  margin-top:20px; 
  padding:10px 30px;
  max-height:40px;
  font-family:'Share Tech Mono', 'sans-serif';
  background:rgba(96,96,238,.18);
  text-decoration: none;
  color:rgba(0,0,0,.69);
  font-size: 18px;
  border-radius:3px;
  &:hover {
    color: rgb(50, 50, 50);
  }
  &:focus + ul {
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0px);
  }
`

export const DDUl = styled.ul`
  margin-top:10px;
  margin-left:20px;
  background: white;
  width:200px;
  height: 200px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction:column;
  list-style: none;
  border-radius:5px;
  opacity: 0;
  pointer-events: none;
  transform: translateY(-10px);
  transition: all 0.4s ease;
`

export const DDLi = styled.li`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events:auto;
  &:hover{
    background-color: rgb(200, 200, 200);
  }
`

export const DDLink = styled.button`
  text-decoration: none;
  background: none;
  border: none;
  color: black;
  text-decoration: none;
`