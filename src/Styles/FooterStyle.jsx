import styled from 'styled-components'

export const FooterContainer = styled.footer `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #d6d3d3;
  width: 95%;
  margin: 80px 0 0 0;
  border-radius: 2px;
  padding: 8px;

  @media screen and (min-width: 481px) and (max-width: 768px) {
    width: 90%;
  }
  @media screen and (min-width: 320px) and (max-width: 480px) {
    width: 90%;
  }

  > h4:first-of-type {
    font-size: 14px;
    margin: 10px;
  }

  > h4:last-of-type {
    font-size: 12px;

    @media screen and (max-width: 768px) {
      text-align: center;
    }
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 150px;
    margin: 10px 0 15px 0;

    @media screen and (min-width: 320px) and (max-width: 480px) {
      column-gap: 80px;
    }
     
    a {
        font-size: 13px;
    }
  }
`