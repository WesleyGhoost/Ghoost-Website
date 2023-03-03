import styled from 'styled-components'

export const AboutMe = styled.section`
  width: 50%;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  left: 200px;
  padding: 10px;

  @media screen and (min-width: 1024px) and (max-width: 1200px)  {
    left: 180px;
  }

  @media screen and (min-width: 769px) and (max-width: 1023px)  {
    left: 140px;
  }

  @media screen and (min-width: 481px) and (max-width: 768px)  {
    left: 90px;
  }

  @media screen and (min-width: 320px) and (max-width: 480px)  {
    left: 30px;
    width: 70%;
  }
`;

export const AboutMeTitle = styled.h1`
  color: #208000bd;
  border-bottom: 2px solid #208000bd;
`;

export const AboutMeDescrip = styled.h3`
  color: #ffffffbb;
`