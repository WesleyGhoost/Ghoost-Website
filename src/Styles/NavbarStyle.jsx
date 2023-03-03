import styled from 'styled-components'

export const NavList = styled.ul`
  color: #ffffffc1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  column-gap: 150px;
  row-gap: 20px;

  @media screen and (min-width: 481px) and (max-width: 768px)  {
    column-gap: 75px;
  }

  @media screen and (min-width: 320px) and (max-width: 480px)  {
    column-gap: 30px;
  }
`;