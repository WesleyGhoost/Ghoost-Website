import styled from 'styled-components'

export const LanguagesTitle = styled.h2`
  margin-top: 100px;
  color: #208000;
  border-bottom: 2px solid #208000bd;
  text-align: center;
`

export const LanguagesContainer = styled.section`
  width: 40%;
  margin-top: 30px;
  display: flex;
  text-align: center;
  justify-content: center;
  flex-wrap: wrap;
  row-gap: 50px;
  column-gap: 60px;
`

export const LanguagesExamples = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 20px;

  h3 {
    color: #ffffff;
  }

  p {
    color: #ffffffbb;

    strong {
      color: #ffffffcd;
    }
  }
`