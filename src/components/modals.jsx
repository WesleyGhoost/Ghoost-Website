import brazilFlag from '../img/pt.png'
import euaFlag from '../img/en.png'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleToPT, toggleToEN } from '../store/languageSlice'
import { SuccessModalContainer, ErrorModalContainer, IncompleteModalContainer, LanguageModalContainer } from '../Styles/modalsStyle'

export function LanguageModal() {
  const dispatch = useDispatch()

  const [showLanguageModal, setShowLanguageModal] = useState('flex')

  const handleToggleToPT = () => {
    dispatch(toggleToPT())
    setShowLanguageModal('none')
  }

  const handleToggleToEN = () => {
    dispatch(toggleToEN())
    setShowLanguageModal('none')
  }

  return (
    <LanguageModalContainer display={showLanguageModal}>
      <div>
        <p>
          Este site possui tradução para o <strong>português(BR)</strong> e para o <strong>inglês(EUA)</strong>
        </p>
        <p>
          Escolha a bandeira conforme a linguagem de sua escolha
        </p>
      </div>
      <div>
        <button onClick={handleToggleToPT}>
          <img src={brazilFlag} alt="Brazil" />
        </button>
        <button onClick={handleToggleToEN}>
          <img src={euaFlag} alt="EUA" />
        </button>
      </div>
    </LanguageModalContainer>
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