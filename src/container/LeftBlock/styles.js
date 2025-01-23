import styled from "styled-components";

export const StyledContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 900px) {
    width: 100%;
    height: fit-content;
  }
`;
