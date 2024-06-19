import { ErrorModalContainer } from '../../Styles/modalsStyle'

export function ErrorModal(props) {
    return (
      <ErrorModalContainer display={props.display}>
        <p>{props.error}</p>
        <button onClick={props.close}>OK</button>
      </ErrorModalContainer>
    )
  }