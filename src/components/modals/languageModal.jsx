import brazilFlag from '../../img/pt.png'
import euaFlag from '../../img/en.png'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { toggleToPT, toggleToEN } from '../../store/languageSlice'
import { toggleTo100 } from '../../store/AppOpacitySlice'
import { LanguageModalContainer } from '../../Styles/modalsStyle'

export function LanguageModal() {
    const dispatch = useDispatch()
  
    const [showLanguageModal, setShowLanguageModal] = useState('flex')
  
    const preventDefault = (e) => {
      e.preventDefault()
    }
  
    const disableScroll = () => {
      window.addEventListener('scroll', preventDefault, { passive: false })
      window.addEventListener('wheel', preventDefault, { passive: false })
    }
  
    const enableScroll = () => {
      window.removeEventListener('scroll', preventDefault, { passive: false })
      window.removeEventListener('wheel', preventDefault, { passive: false })
    }
  
    const handleToggleToPT = () => {
      dispatch(toggleToPT())
      dispatch(toggleTo100())
      setShowLanguageModal('none')
      enableScroll()
    }
  
    const handleToggleToEN = () => {
      dispatch(toggleToEN())
      dispatch(toggleTo100())
      setShowLanguageModal('none')
      enableScroll()
    }
  
    return (
      <LanguageModalContainer display={showLanguageModal} onLoad={disableScroll}>
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