import styled from "styled-components";

export const StyledEmpty = styled.div`
  text-align: center;
  line-height: 2rem;
`;

export const StyledContainer = styled.div`
  width: 100%;
  height: 90%;
  margin-top: 1rem;
  overflow-y: scroll;
  > div:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

export const StyledItem = styled.div`
  height: 3rem;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  border-radius: 0.5rem;
  background: #fff;
`;

export const StyledName = styled.div`
  max-width: 80%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
