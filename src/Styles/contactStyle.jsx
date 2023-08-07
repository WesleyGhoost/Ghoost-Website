import styled from 'styled-components'

export const ContactContainer = styled.div`
  width: 80%;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 10px 20px 10px;
  border: 3px solid green;
  border-radius: 5px;

  h3 {
    text-align: center;
    color: #ffffffbb;
  }
`

export const ContactTitle = styled.h2`
  color: #208000;
  border-bottom: 2px solid #208000bd;
`

export const ContactForm = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;

  input {
    border-radius: 5px;
    border: none;
    padding: 6px 8px;
    width: 300px;
    font-weight: 600;

    @media screen and (min-width: 320px) and (max-width: 480px) {
      width: 220px;
    }
  }

  textarea {
    resize: none;
    padding: 8px;
    width: 400px;
    height: 100px;
    font-weight: 600;

    @media screen and (min-width: 481px) and (max-width: 768px) {
      width: 300px;
    }

    @media screen and (min-width: 320px) and (max-width: 480px) {
      width: 220px;
    }
  }

  button {
    background-color: #22c622;
    border: none;
    border-radius: 8px;
    width: 100px;
    padding: 6px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: 0.2s;

    &:hover {
      background-color: #28df28;
      transition: 0.3s;
    }
  }
`