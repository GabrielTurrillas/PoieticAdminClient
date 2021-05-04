import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import DropDown from '../DropDown'
import ReferralButton from '../ReferralButton/index'
import { ReferralContainer } from './ReferralElements'
import { getTherapistsList } from '../../redux/actions/therapistsActions'

const Referral = () => {
  const therapists = useSelector(state => state.therapistsReducer.therapists)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getTherapistsList())
  }, [dispatch])
  return (
    <>
      <ReferralContainer>
        <DropDown therapists={therapists} />
        <ReferralButton />
      </ReferralContainer>      
    </>
  )
}

export default Referral
