import styled from 'styled-components'

export const ProjectsTitle = styled.h2`
  color: #208000;
  margin-top: 100px;
  border-bottom: 2px solid #208000bd;
  text-align: center;
`

export const ProjectsSubTitle = styled.h3`
  width: 50%;
  text-align: center;
  color: #ffffffbb;

  a:link {
    color:#009e00
  }

  a:visited {
    color: #009e00;
  }

  @media screen and (min-width: 320px) and (max-width: 480px)  {
    width: 70%;
  }
`

export const ProjectsContainer = styled.section`
  width: 85%;
  margin-top: 60px;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;

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

  > img {
    position: relative;
    top: 50px;
    z-index: 3;
  }

  div {
    display: flex;
    gap: 40px;

    img {
      position: relative;
      top: 50px;
      z-index: 3;
    }
  }

  a > img {
    width: 380px;
    height: 200px;
    position: relative;

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
  }

  h3 {
    color: white;
    max-width: 70%;
    text-align: center;
    top: 40px;
    left: 40px;

    @media screen and (min-width: 420px) and (max-width: 481px) {
      top: 30px;
      left: 35px;
    }
  }

  details {
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

    p {
      color: #ffffffc5;
      text-align: center;

      a:link {
        color: #009e00;
      }

      a:visited {
        color: #009e00;
      }
    }
  }
`

