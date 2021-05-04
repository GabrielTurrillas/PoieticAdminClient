import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const ReferralLink = styled(Link)`
  margin-top:20px;
  margin-left: 20px;
  max-height:40px;
  font-family:'Share Tech Mono', 'sans-serif';
  padding:10px 30px;
  background:rgba(96,96,238,.18);
  text-decoration: none;
  color:rgba(0,0,0,.69);
  font-size: 18px;
  border-radius:3px;
  &:hover {
    color: rgb(50, 50, 50);
  }
`