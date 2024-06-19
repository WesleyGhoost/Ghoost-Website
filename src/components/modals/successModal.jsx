import { SuccessModalContainer } from '../../Styles/modalsStyle'
import { useSelector } from 'react-redux'

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