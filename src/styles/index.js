import styled from "styled-components";
import { color, layout, space, borderRadius } from "styled-system";

export const StyledContainer = styled.div`
  display: flex;
  min-height: 680px;
  height: 100vh;
  font-family: "Roboto Condensed", sans-serif;
  font-size: 1rem;

  @media only screen and (max-width: 900px) {
    flex-direction: column;
    min-width: 450px;
  }
`;

export const StyledCustomImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
  object-position: center;
  pointer-events: none;
  ${layout};
  ${space};
  ${borderRadius};
`;

export const StyledTitle = styled.div`
  background-color: #ced4da;
  font-size: 1.5rem;
  font-weight: 600;
  padding: 1rem;
  ${color};
`;

export const StyledInput = styled.input`
  flex: 1;
  height: 3rem;
  border-radius: 16rem;
  border: 0.1rem solid #bfc0c0;
  padding: 0 1rem;
  ${space};
`;

export const StyledBlock = styled.div`
  padding: 1rem;
  overflow: hidden;
  ${layout};
  ${space};
`;

export const StyledLoading = styled.div`
  width: 100%;
  object-fit: cover;
  border-radius: 1rem 0 0 1rem;
  background: url("/images/loading.gif") no-repeat center/180%;
`;
