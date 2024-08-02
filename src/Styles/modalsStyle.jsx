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

export const LanguageModalContainer = styled(SuccessModalContainer)`
  height: 180px;
  gap: 35px;
  left: 30%;

  > div:first-of-type {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    row-gap: 15px;

    p {
      margin: 0;
    }
  }

  > div:last-of-type {
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 10px;

    button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 70px;
    height: 40px;

      img {
        width: 45px;
      }
    }
  }

  @media screen and (min-width: 520px) and (max-width: 768px) {
    height: 200px;
    left: 24%;
  }

  @media screen and (min-width: 482px) and (max-width: 519px) {
    height: 220px;
    left: 24%;
  }

  @media screen and (min-width: 420px) and (max-width: 481px) {
    height: 220px;
    left: 18%;
  }
`