import styled from "styled-components";

export const TimerWrap = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 900px) {
    width: 100%;
    height: fit-content;
  }
`;

export const Title = styled.div`
  width: 100%;
  background-color: #e9e9e9;
  font-size: 1.5rem;
  font-weight: 600;
  padding: 1rem;
`;
