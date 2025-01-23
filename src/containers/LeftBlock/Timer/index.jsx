import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { StyledBlock, StyledTitle } from "../../../styles";
import { StyledCommonButton } from "../../../styles/button";
import { listSelector } from "../../../store/selector";
import { setActInfo } from "../../../store/action";
import Setting from "./Setting";
import Countdown from "./Countdown";
import useCountdown from "../../../hooks/useCountdown";
import { StyledBtnContainer } from "./styles";

const Timer = () => {
  const dispatch = useDispatch();
  const { list } = useSelector(listSelector);
  const [totalSec, setTotalSec] = useState(0);
  const canStart = totalSec > 0;

  const handleTimerEnd = () => {
    const winner = list[Math.floor(Math.random() * list.length)];
    dispatch(setActInfo({ isCountdown: false, winner }));
    setTotalSec(0);
  };

  const { timeLeft, startCountdown } = useCountdown({
    initialSec: totalSec,
    onEnd: handleTimerEnd,
  });

  const handleSetTimer = ({ sec }) => {
    setTotalSec(sec);
  };

  const handleStartTimer = () => {
    if (!canStart) return;

    if (list?.length === 0) {
      return window.alert(
        "No one is in the list, so the countdown cannot start!"
      );
    }
    dispatch(setActInfo({ isCountdown: true }));
    startCountdown();
  };

  return (
    <div>
      <StyledTitle bg="#e9e9e9">Timer Setting</StyledTitle>
      <StyledBlock>
        <Setting onSet={handleSetTimer} />
        <StyledBtnContainer>
          <StyledCommonButton onClick={handleStartTimer} disabled={!canStart}>
            Start
          </StyledCommonButton>
        </StyledBtnContainer>
        <Countdown sec={timeLeft} />
      </StyledBlock>
    </div>
  );
};

export default Timer;
