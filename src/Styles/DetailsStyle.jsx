import styled from 'styled-components'

export const DetailsContainer = styled.section`
  width: 50%;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  position: relative;
  right: 200px;
  padding: 10px;

  @media screen and (min-width: 1024px) and (max-width: 1200px)  {
    right: 190px;
  }

  @media screen and (min-width: 769px) and (max-width: 1023px)  {
    right: 140px;
  }

  @media screen and (min-width: 481px) and (max-width: 768px)  {
    right: 0px;
    width: 80%;
  }

  @media screen and (min-width: 320px) and (max-width: 480px)  {
    right: 0px;
    width: 80%;
  }
`

export const DetailsTitle = styled.h1`
  color: #208000bd;
  border-bottom: 2px solid #208000bd;
  align-self: center;
`;

export const DetailsDescrip = styled.h3`
  color: #ffffffbb;
`

export const DetailsLinkGit = styled.a`
  color: white;
`

export const DetailsLinkFigs = styled.a`
  color: #ffffffb6;
  font-size: 12px;
`