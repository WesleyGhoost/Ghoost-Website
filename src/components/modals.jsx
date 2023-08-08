import React from 'react'
import { SuccessModalContainer, ErrorModalContainer, IncompleteModalContainer } from '../Styles/modalsStyle'

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