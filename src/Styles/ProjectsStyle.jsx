import styled from 'styled-components'

export const ProjectsContainer = styled.section`
  width: 85%;
  margin-top: 60px;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;

  #project-soon {
    cursor: pointer;
    opacity: 4%;
  }

  @media screen and (min-width: 1024px) and (max-width: 1200px)  {
    width: 97%;
  }

  @media screen and (min-width: 769px) and (max-width: 1023px)  {
    width: 100%;
  }

  @media screen and (min-width: 481px) and (max-width: 768px)  {
    width: 100%;
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }

  @media screen and (min-width: 320px) and (max-width: 480px)  {
    flex-direction: column;
    align-items: center;
    gap: 60px;
  }
`

export const ProjectsTitle = styled.h2`
  color: #208000bd;
  margin-top: 100px;
  border-bottom: 2px solid #208000bd;
  text-align: center;
`

export const ProjectsSubTitle = styled.h3`
  width: 50%;
  text-align: center;
  color: #ffffffbb;

  @media screen and (min-width: 320px) and (max-width: 480px)  {
    width: 70%;
  }
`

export const ProjectsColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
`

export const ProjectInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`

export const ProjectsImgs = styled.img`
 opacity: 40%;
 :hover {
  opacity: 100%;
 }

  @media screen and (min-width: 769px) and (max-width: 1023px)  {
    width: 300px;
    height: 160px;
  }

  @media screen and (min-width: 481px) and (max-width: 768px)  {
    width: 280px;
    height: 140px;
  }

  @media screen and (min-width: 320px) and (max-width: 480px)  {
    width: 250px;
    height: 130px;
  }
`

export const ProjectsDetails = styled.details`
  width: 100%;
  max-width: 370px;
  text-align: center;
  color: #ffffff;

  @media screen and (min-width: 1024px) and (max-width: 1200px)  {
    width: 97%;
    max-width: 360px;
  }

  @media screen and (min-width: 769px) and (max-width: 1023px)  {
    width: 100%;
    max-width: 290px;
  }
  
  @media screen and (min-width: 320px) and (max-width: 480px)  {
    width: 80%;
  }
`

export const ProjectsDescrip = styled.p`
  color: #ffffffc5;
  text-align: center;
`

export const ProjectSoon = styled.h3`
  width: 50%;
  text-align: center;
  color: #ffffff;
  margin: 0;

  @media screen and (min-width: 320px) and (max-width: 480px)  {
    width: 80%;
  }
`