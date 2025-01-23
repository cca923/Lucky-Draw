import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { countdown, changeTimerStatus } from "../../../Redux/Action";
import { CountdownWrap, StartButton, Time } from "./styles";

const Countdown = ({ setWinner }) => {
  const list = useSelector((state) => state.list);
  const totalSeconds = useSelector((state) => state.totalSeconds);
  const timerStatus = useSelector((state) => state.timerStatus);
  const dispatch = useDispatch();

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
        disabled={totalSeconds ? false : true}
      >
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
