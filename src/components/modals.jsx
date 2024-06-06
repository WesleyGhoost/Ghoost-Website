import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleToPT, toggleToEN } from '../store/languageSlice' 
import { SuccessModalContainer, ErrorModalContainer, IncompleteModalContainer } from '../Styles/modalsStyle'

export function LanguageModal() {
  const dispatch = useDispatch()

  const handleToggleToPT = () => {
    dispatch(toggleToPT())
  }

  const handleToggleToEN = () => {
    dispatch(toggleToEN())
  }

  return (
    <div>
      <p>mudar idioma?</p>
      <button onClick={handleToggleToPT}></button>
      <button onClick={handleToggleToEN}></button>
    </div>
  )
}

export function SuccessModal(props) {
  return (
    <SuccessModalContainer display={props.display}>
        <p>Email enviado com sucesso!</p>
        <button onClick={props.close}>OK</button>
    </SuccessModalContainer>
  )
}

export function ErrorModal(props) {
  return (
    <ErrorModalContainer display={props.display}>
        <p>{props.error}</p>
        <button onClick={props.close}>OK</button>
    </ErrorModalContainer>
  )
}

export function IncompleteModal(props) {
  return (
    <IncompleteModalContainer display={props.display}>
        <p>Por favor, preencha todas as informações.</p>
        <button onClick={props.close}>OK</button>
    </IncompleteModalContainer>
  )
}