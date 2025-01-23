import styled from "styled-components";

import { CommonButton } from "../../../component/CommonButton";

export const CountdownWrap = styled.div`
  padding: 1rem;
`;

export const StartButton = styled(CommonButton)`
  width: 100%;
  background-color: #9fa0ff;
  border: 2px solid #cddafd;
  cursor: ${(props) => (props.totalSeconds ? "pointer" : "not-allowed")};

  &:hover {
    background-color: #8187dc;
  }
`;

export const Time = styled.div`
  width: 100%;
  font-size: 5rem;
  text-align: center;
  margin: 1.5rem 0;
`;
