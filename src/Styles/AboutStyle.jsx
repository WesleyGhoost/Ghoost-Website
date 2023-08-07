import styled from 'styled-components'

export const AboutContainer = styled.section`
  width: 100%;
  margin-top: 160px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 320px) and (max-width: 768px){
    margin-top: 80px;
    flex-direction: column;
  }
`;

export const AboutImg = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 200px;
    height: 200px;
    border-radius: 100px;

    @media screen and (min-width: 320px) and (max-width: 768px){
      display: none;
    }
  }
`

export const AboutMe = styled.div`
  width: 50%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 320px) and (max-width: 768px){
    width: 80%;
    padding: 0;
  }

  h1 {
    color: #208000;
    border-bottom: 2px solid #208000bd;

    @media screen and (min-width: 320px) and (max-width: 768px){
      margin-top: 80px;
    }
}

  h3 {
    color: #ffffffbb;

    strong {
    color: #3c8000c0;
    }
  }
`