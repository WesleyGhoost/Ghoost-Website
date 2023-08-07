import styled from 'styled-components'

export const SuccessModalContainer = styled.div`
  width: 40%;
  height: 120px;
  position: fixed;
  top: 80px;
  z-index: 6;
  display: ${props => props.display};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  padding: 10px;
  background-color: #eeebeb;
  border-radius: 8px;

  @media screen and (min-width: 481px) and (max-width: 768px) {
    width: 50%;
  }

  @media screen and (min-width: 320px) and (max-width: 480px) {
    width: 60%;
  }

  p {
    font-size: 18px;
    color: black;
    text-align: center;
  }
  button {
    background-color: #00bfff;
    border: none;
    border-radius: 6px;
    padding: 4px 14px;
    cursor: pointer;
    transition: 0.1s;
    font-size: 15px;

    &:hover {
        background-color: #00a2ff;
    }
  }
`

export const ErrorModalContainer = styled(SuccessModalContainer)``

export const IncompleteModalContainer = styled(SuccessModalContainer)``