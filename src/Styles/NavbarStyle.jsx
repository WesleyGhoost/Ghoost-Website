import styled from 'styled-components'

export const NavDefault = styled.nav `
  width: 83%;
  display: flex;
  align-items: center;
  position: fixed;
  z-index: 4;
  border-radius: 8px;
  background-color: rgb(0, 0, 0);

  @media screen and (min-width: 769px) and (max-width: 1023px)  {
    width: 82%;
  }

  @media screen and (min-width: 481px) and (max-width: 768px)  {
    width: 81%;
  }

  @media screen and (min-width: 320px) and (max-width: 480px)  {
    width: 79%;
  }
    
  ul {
    width: 100%;
    color: #ffffffc1;
    display: flex;
    align-items: center;
    justify-content: space-around;
    list-style: none;

    li {
      cursor: pointer;

      &:hover {
        color: rgba(255, 255, 255, 0.612);
      }
    }
  }
`;

export const NavBurger = styled(NavDefault) `
  justify-content: center;
  z-index: 5;
`

export const Burger = styled.div `
  height: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  row-gap: 10px;

  &:hover .burger-bar.unclicked {
    background-color: #00ff73d9;
  }

  &:hover .burger-bar.clicked {
    background-color: #ff0000a0;
  }

  @media screen and (min-width: 769px) and (max-width: 1022px) {
    width: 6%;
  }

  @media screen and (min-width: 481px) and (max-width: 768px) {
    width: 8%;
  }

  @media screen and (min-width: 320px) and (max-width: 480px) {
    width: 12%;
  }
`

export const Menu = styled.div `
  width: 50%;
  height: 220px;
  position: fixed;
  top: 50px;
  z-index: 4;
  border-radius: 10px;
  background-color: #b5aeae;
  display: ${props => props.display};
  
  ul {
    display: flex;
    flex-direction: column;
    row-gap: 15px;

    li {
      cursor: pointer;

      &:hover {
        color: rgb(255, 255, 255);
      }
    }
  }
`