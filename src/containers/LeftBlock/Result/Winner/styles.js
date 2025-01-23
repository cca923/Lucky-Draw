import styled from "styled-components";

export const StyledContainer = styled.div`
  flex: 1;
  display: flex;
  background: #e9e9e9;
  border-radius: 0 1rem 1rem 0;
  position: relative;
`;

export const StyledName = styled.div`
  max-width: 80%;
  font-size: 3rem;
  font-weight: 600;
  line-height: 5rem;
  margin: auto;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
