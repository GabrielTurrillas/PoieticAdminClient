import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { ReferralLink } from './ReferralButtonElements'
import { postCreateTherapy, putUpdateTherapy, retrieveTherapy } from '../../redux/actions/therapyAction'

const ReferralButton = () => {
  const dispatch = useDispatch()
  const histroy = useHistory()
  const userAccount = useSelector(state => state.therapistsReducer.therapistIdReferral)
  const paciente = useSelector(state => state.patientReducer.patient.id)
  const patientTherapyId = useSelector(state => state.therapyReducer.patientTherapy.id)

  const routeChange = () => {
    let path = `/`;
    histroy.push(path);
  }

  const onSubmit = () => {
    const body = JSON.stringify({ userAccount, paciente });
    if(!patientTherapyId || patientTherapyId.length) {
      dispatch(postCreateTherapy(body));
    }
    else{
      dispatch(putUpdateTherapy(patientTherapyId, body));
    }
    routeChange();
  }

  useEffect(() => {
    dispatch(retrieveTherapy(paciente))
  },[dispatch, paciente])
  
  return (
    <>
      <ReferralLink to='#!' onClick={() => onSubmit()}>DERIVAR</ReferralLink>
    </>
  )
}

export default ReferralButton
