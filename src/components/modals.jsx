import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleToPT, toggleToEN } from '../store/languageSlice'
import { useSelector } from 'react-redux' 
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
  const language = useSelector((state) => state.language)

  return (
    <SuccessModalContainer display={props.display}>
        {language === 'pt' ? 
        <p>Email enviado com sucesso!</p> :
        <p>Email sent successfully!</p>
        }
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
  const language = useSelector((state) => state.language)

  return (
    <IncompleteModalContainer display={props.display}>
        {language === 'pt' ? 
        <p>Por favor, preencha todas as informações.</p> :
        <p>Please, fill all the informations.</p>
        }
        <button onClick={props.close}>OK</button>
    </IncompleteModalContainer>
  )
}