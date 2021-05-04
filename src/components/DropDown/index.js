import React from 'react'
import { useDispatch } from 'react-redux'
import { DDButton, DDUl, DDLink, DDLi, Container } from './DropDownElements'
import { sendTherapist } from '../../redux/actions/therapistsActions'

const DropDown = ({therapists}) => {
  const dispatch = useDispatch()
  const handleClick = (id, e) => {
    e.preventDefault();
    dispatch(sendTherapist(id))
  }
  return (
    <Container>
      <DDButton to='#!'>SELECCIONA PROFESIONAL</DDButton>
      <DDUl>
        {therapists && therapists.map(therapist => {
          const id = therapist.id
          return(
            <DDLi onClick={(e) => handleClick(id, e)}><DDLink to='#!'>{therapist.nombre} {therapist.apellidoPaterno}</DDLink></DDLi>
          )
        })}
      </DDUl>
    </Container>
  )
}

export default DropDown