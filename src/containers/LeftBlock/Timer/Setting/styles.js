import styled from "styled-components";
import { StyledCommonButton } from "../../../../styles/button";

export const StyledContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

export const StyledInputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-right: 1rem;
  > div {
    display: flex;
    align-items: center;
    &:not(:last-child) {
      margin-bottom: 1rem;
    }
  }
`;

export const StyledBtnContainer = styled.div`
  display: flex;
  > button {
    flex: 1;
  }
`;

export const StyledClearButton = styled(StyledCommonButton)`
  border-color: #ddd;
  background: #e9e9e9;
  &:hover {
    background: #c5c5c5;
  }
`;

export const StyledError = styled.div`
  text-align: center;
  color: red;
  margin-top: 0.5rem;
`;
