import React, { useState } from "react";

import Setting from "./Setting";
import Countdown from "./Countdown";
import Result from "./Result";
import { TimerWrap, Title } from "./styles";

const Timer = () => {
  const [winner, setWinner] = useState();

  return (
    <TimerWrap>
      <Title>抽獎時間</Title>

      <Setting />

      <Countdown setWinner={setWinner} />

      <Title>抽獎結果</Title>
      <Result winner={winner} setWinner={setWinner} />
    </TimerWrap>
  );
};

export default Timer;
