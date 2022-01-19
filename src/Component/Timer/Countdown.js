import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Button } from "../Common/button";

const CountdownWrap = styled.div`
  padding: 1rem;
`;

const StartButton = styled(Button)`
  width: 100%;
  background-color: #9fa0ff;
  border: 2px solid #cddafd;

  &:hover {
    background-color: #8187dc;
  }
`;

const Time = styled.div`
  width: 100%;
  height: 100%;
  font-size: 5rem;
  text-align: center;
  margin: 1.5rem 0;
`;

const Countdown = ({
  timerMinutes,
  timerSeconds,
  setTimerMinutes,
  setTimerSeconds,
  setLoading,
  setWinner,
}) => {
  const list = useSelector((state) => state.list);
  const [startTimer, setStartTimer] = useState(false);
  const minutes = Number(timerMinutes);
  const seconds = Number(timerSeconds);

  useEffect(() => {
    if (startTimer) {
      const countdownTimer = setInterval(() => {
        if (seconds > 0) {
          if (seconds > 10) {
            setTimerSeconds(seconds - 1);
          } else {
            setTimerSeconds("0" + (seconds - 1).toString());
          }
        }

        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(countdownTimer);
            setStartTimer(false);
            setLoading(false);

            const winner = list[Math.floor(Math.random() * list.length)];
            setWinner(winner);
          } else {
            if (minutes > 10) {
              setTimerMinutes(minutes - 1);
              setTimerSeconds(59);
            } else {
              setTimerMinutes("0" + (minutes - 1).toString());
              setTimerSeconds(59);
            }
          }
        }
      }, 1000);

      return () => {
        clearInterval(countdownTimer);
      };
    }
  }, [startTimer, timerMinutes, timerSeconds]);

  return (
    <CountdownWrap>
      <StartButton
        onClick={() => {
          if (timerMinutes !== "00" || timerSeconds !== "00") {
            if (list.length !== 0) {
              setStartTimer(true);
              setLoading(true);
              setWinner("");
            } else {
              window.alert("目前沒有人參加抽獎，所以無法倒數喔！");
            }
          } else {
            window.alert("沒有設定抽獎時間喔！");
          }
        }}>
        開始倒數
      </StartButton>
      <Time>
        {timerMinutes}:{timerSeconds}
      </Time>
    </CountdownWrap>
  );
};

export default Countdown;
