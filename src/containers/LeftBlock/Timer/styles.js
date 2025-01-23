import styled from "styled-components";

export const StyledBtnContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 1rem 0;
  > button {
    flex: 1;
    &:not(:last-child) {
      margin-right: 0.5rem;
    }
  }
`;
