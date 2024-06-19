import styled from "styled-components";

export const ContainerAll = styled.div`
  margin: 0 auto;
  width: 85%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #000000be;
  border-radius: 8px;
  opacity: ${props => props.opacity};
  z-index: 0;
`;