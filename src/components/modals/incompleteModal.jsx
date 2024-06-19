import { IncompleteModalContainer } from '../../Styles/modalsStyle'
import { useSelector } from 'react-redux'

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