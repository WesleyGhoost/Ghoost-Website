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
    width: 96%;
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

    #firstElement {
      order: 1;
    }
    #secondElement {
      order: 2;
    }
    #thirdElement {
      order: 3;
    }
    #fourthElement {
      order: 4;
    }
    #fifthElement {
      order: 5;
    }
    #sixthElement {
      order: 6;
    }
    #seventhElement {
      order: 7;
    }
    #eighthElement {
      order: 8;
    }
    #ninthElement {
      order: 9;
    }
    #tenthElement {
      order: 10;
    }
    #eleventhElement {
      order: 11;
    }
    #twelfthElement {
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