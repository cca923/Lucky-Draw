import styled from "styled-components";
import { layout, color, space } from "styled-system";
import Button from "../component/Button";

export const StyledCommonButton = styled(Button)`
  min-width: 5rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0.1rem solid #cddafd;
  background: #abc4ff;
  border-radius: 16rem;
  cursor: pointer;
  ${color};
  ${space};
  ${layout};

  &:disabled {
    cursor: not-allowed;
  }

  &:hover {
    background: #93aeed;
  }
`;

export const StyledRemoveButton = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  display: inline-block;
  margin-left: auto;
  background-size: cover;
  background-position: center;
  background-image: url("/images/remove.png");
  cursor: pointer;

  &:hover {
    background-image: url("/images/remove-hover.png");
  }
`;
