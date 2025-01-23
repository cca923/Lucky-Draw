import React from "react";

import Timer from "./Timer";
import Result from "./Result";
import { StyledContainer } from "./styles";

const LeftBlock = () => {
  return (
    <StyledContainer>
      <Timer />
      <Result />
    </StyledContainer>
  );
};

export default LeftBlock;
