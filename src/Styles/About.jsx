import styled from 'styled-components'

export const About = styled.section`
  width: 100%;
  margin-top: 150px;
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
`

export const Img = styled.img`
  width: 200px;
  height: 200px;

  @media screen and (min-width: 320px) and (max-width: 768px){
    width: 160px;
    height: 160px;
  }
`

export const ImgDetail = styled.details`
  text-align: center;
  font-size: 13px;
  color: #ffffffb0;

  @media screen and (min-width: 320px) and (max-width: 480px){
    font-size: 16px;
    h5 {
      font-size: 13px;
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
`

export const AboutMeTitle = styled.h1`
  color: #208000bd;
  border-bottom: 2px solid #208000bd;

  @media screen and (min-width: 320px) and (max-width: 768px){
    margin-top: 80px;
  }
`;

export const AboutMeDescrip = styled.h3`
  color: #ffffffbb;
`

export const AboutMeStrong = styled.strong`
  color: #3c8000a4;
`