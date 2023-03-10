import styled from 'styled-components'

export const Languages = styled.section`
  width: 40%;
  margin-top: 30px;
  display: flex;
  text-align: center;
  justify-content: center;
  flex-wrap: wrap;
  row-gap: 50px;
  column-gap: 60px;
`

export const LanguagesTitle = styled.h2`
  margin-top: 100px;
  color: #208000bd;
  border-bottom: 2px solid #208000bd;
  text-align: center;
`

export const LanguagesExamples = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  right: 300px;
  padding: 10px;

  @media screen and (min-width: 1024px) and (max-width: 1200px)  {
    right: 250px;
  }

  @media screen and (min-width: 769px) and (max-width: 1023px)  {
    right: 170px;
  }

  @media screen and (min-width: 481px) and (max-width: 768px)  {
    right: 100px;
  }

  @media screen and (min-width: 320px) and (max-width: 480px)  {
    right: 70px;
  }
`

export const LanguagesExamplesTitle = styled.h3`
  color: #ffffff;
`

export const LanguagesExamplesLang = styled.strong`
  color: #ffffffcd;
`

export const LanguagesExamplesDescrips = styled.p`
  color: #ffffffbb;
`