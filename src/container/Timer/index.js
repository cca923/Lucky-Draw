import React, { useState } from "react";

import Setting from "./Setting";
import Countdown from "./Countdown";
import Result from "./Result";
import { StyledContainer } from "./styles";
import { StyledTitle } from "../../styles";

const Timer = () => {
  const [winner, setWinner] = useState();

  return (
    <StyledContainer>
      <StyledTitle bg="#e9e9e9">Timer Setting</StyledTitle>
      <Setting />

      <Countdown setWinner={setWinner} />

      <StyledTitle bg="#e9e9e9">Result</StyledTitle>
      <Result winner={winner} setWinner={setWinner} />
    </StyledContainer>
  );
};

export default Timer;
