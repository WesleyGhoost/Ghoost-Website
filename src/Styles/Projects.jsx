import styled from 'styled-components'

export const Projects = styled.section`
  width: 85%;
  margin-top: 60px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  position: relative;
  row-gap: 40px;

  @media screen and (min-width: 1024px) and (max-width: 1200px)  {
    width: 97%;
  }

  @media screen and (min-width: 769px) and (max-width: 1023px)  {
    width: 100%;
  }

  @media screen and (min-width: 481px) and (max-width: 768px)  {
    width: 100%;
  }

  @media screen and (min-width: 320px) and (max-width: 480px)  {
    flex-direction: column;
    align-items: center;
    gap: 60px;

    #firstProject {
      order: 1;
    }
    #firstDetail {
      order: 2;
    }
    #secondProject {
      order: 3;
    }
    #secondDetail {
      order: 4;
    }
    #thirdProject {
      order: 5;
    }
    #thirdDetail {
      order: 6;
    }
    #fourthProject {
      order: 7;
    }
    #fourthDetail {
      order: 8;
    }
    #fifthProject {
      order: 9;
    }
    #fifthDetail {
      order: 10;
    }
    #sixthProject {
      order: 11;
    }
    #sixthDetail {
      order: 12;
    }
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
    width: 190px;
    height: 100px;
  }

  @media screen and (min-width: 320px) and (max-width: 480px)  {
    width: 250px;
    height: 130px;
  }
`

export const ProjectsDetails = styled.details`
  width: 50%;
  text-align: center;
  color: #ffffff;
  
  @media screen and (min-width: 320px) and (max-width: 480px)  {
    width: 80%;
  }
`

export const ProjectsDescrip = styled.p`
  color: #ffffffc5;
`