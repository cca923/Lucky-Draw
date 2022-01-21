import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import { countdown, changeTimerStatus } from "../../Redux/Action";
import { Button } from "../Common/button";

const CountdownWrap = styled.div`
  padding: 1rem;
`;

const StartButton = styled(Button)`
  width: 100%;
  background-color: #9fa0ff;
  border: 2px solid #cddafd;
  cursor: ${(props) => (props.totalSeconds ? "pointer" : "not-allowed")};

  &:hover {
    background-color: #8187dc;
  }
`;

const Time = styled.div`
  width: 100%;
  font-size: 5rem;
  text-align: center;
  margin: 1.5rem 0;
`;

const Countdown = ({ setWinner }) => {
  const list = useSelector((state) => state.list);
  const totalSeconds = useSelector((state) => state.totalSeconds);
  const timerStatus = useSelector((state) => state.timerStatus);
  const dispatch = useDispatch();

  console.log("計時器重 render");

  const timeFormat = (num) => {
    return num >= 10 ? num : "0" + num;
  };

  useEffect(() => {
    if (timerStatus) {
      let countdownTimer = null;

      if (totalSeconds > 0) {
        countdownTimer = setTimeout(() => {
          dispatch(countdown(totalSeconds));
        }, 1000);
      } else if (totalSeconds === 0) {
        clearTimeout(countdownTimer);
        dispatch(changeTimerStatus(false));

        const winner = list[Math.floor(Math.random() * list.length)];
        setWinner(winner);
      }

      return () => {
        clearTimeout(countdownTimer);
      };
    }
  }, [timerStatus, totalSeconds]);

  return (
    <CountdownWrap>
      <StartButton
        totalSeconds={totalSeconds}
        onClick={() => {
          if (list.length !== 0) {
            dispatch(changeTimerStatus(true));
          } else {
            window.alert("目前沒有人參加抽獎，所以無法倒數喔！");
          }
        }}
        disabled={totalSeconds ? false : true}>
        開始倒數
      </StartButton>
      <Time>
        {timeFormat(Math.floor(totalSeconds / 60))}:
        {timeFormat(totalSeconds % 60)}
      </Time>
    </CountdownWrap>
  );
};

export default React.memo(Countdown);
