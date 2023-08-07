import styled from 'styled-components'

export const IntroContainer = styled.section`
  width: 75%;
  margin-top: 120px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px;
`

export const IntroLinks = styled.div`
  display: flex;
  gap: 30px;
`

export const IntroMain = styled.main`
  display: flex;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
    gap: 5px;

    h1 {
      margin-top: 50px;
      font-size: 45px;
      color: #208000;

      @media screen and (min-width: 320px) and (max-width: 768px) {
        font-size: 35px;
      }
    }

    h3 {
      color: #ffffffbb;
      font-size: 22px;
    }
  }

  img {
    width: 200px;
    height: 200px;

    @media screen and (min-width: 320px) and (max-width: 768px){
      display: none;
    }
}
`




