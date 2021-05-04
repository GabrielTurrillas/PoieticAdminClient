import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Button = styled(Link)`
  text-decoration:none;
  background:rgba(96,96,238,.18);
  color:rgba(0,0,0,.69);
  padding:10px 60px 10px 60px;
  max-height:40px;
  border-radius:5px;
  margin-top:70px;
  font-family: 'Share Tech Mono', monospace;
`

export const InfoButtonContainer = styled.div`
  display:flex;
  justify-content:center;
  width:100%;
  height:100%;
`
