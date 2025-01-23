import styled from "styled-components";

export const StyledContainer = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 900px) {
    height: 15rem;
  }
`;

export const StyledImage = styled.div`
  flex: 1;
  height: 12rem;
  background: url("/images/winner.png") no-repeat center/cover;
  border-radius: 1rem 0 0 1rem;
`;
