import React, { useState } from "react";
import styled from "styled-components";

import Setting from "./Setting";
import Countdown from "./Countdown";
import Winner from "./Winner";

const TimerWrap = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 900px) {
    width: 100%;
    height: fit-content;
  }
`;

const Title = styled.div`
  width: 100%;
  background-color: #e9e9e9;
  font-size: 1.5rem;
  font-weight: 600;
  padding: 1rem;
`;

const Timer = () => {
  const [winner, setWinner] = useState();

  return (
    <TimerWrap>
      <Title>抽獎時間</Title>

      <Setting />

      <Countdown setWinner={setWinner} />

      <Title>抽獎結果</Title>
      <Winner winner={winner} setWinner={setWinner} />
    </TimerWrap>
  );
};

export default Timer;
