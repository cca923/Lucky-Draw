import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import { countdown, getTotalSeconds } from "../../Redux/Action";
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
  minutes,
  seconds,
  // setMinutes,
  // setSeconds,
  setLoading,
  setWinner,
}) => {
  const list = useSelector((state) => state.list);
  const totalSeconds = useSelector((state) => state.totalSeconds);
  const dispatch = useDispatch();
  // const [totalSeconds, setTotalSeconds] = useState();
  // const [startTimer, setStartTimer] = useState(false);
  // const minutes = Number(timerMinutes);
  // const seconds = Number(timerSeconds);

  const timeFormat = (num) => {
    return num >= 10 ? num : "0" + num;
  };

  console.log("計時器重 render");

  useEffect(() => {
    let countdownTimer = null;

    if (totalSeconds > 0) {
      countdownTimer = setTimeout(() => {
        dispatch(countdown(totalSeconds));
        // setTotalSeconds((totalSeconds) => totalSeconds - 1);
      }, 1000);
    } else if (totalSeconds === 0) {
      clearTimeout(countdownTimer);
      setLoading(false);

      const winner = list[Math.floor(Math.random() * list.length)];
      setWinner(winner);
    }

    return () => {
      clearTimeout(countdownTimer);
    };
  }, [totalSeconds]);

  // useEffect(() => {
  //   if (startTimer) {
  //     const countdownTimer = setInterval(() => {
  //       if (seconds > 0) {
  //         if (seconds > 10) {
  //           setSeconds(seconds - 1);
  //         } else {
  //           setSeconds("0" + (seconds - 1).toString());
  //         }
  //       }

  //       if (seconds === 0) {
  //         if (minutes === 0) {
  //           clearInterval(countdownTimer);
  //           setStartTimer(false);
  //           setLoading(false);

  //           const winner = list[Math.floor(Math.random() * list.length)];
  //           setWinner(winner);
  //         } else {
  //           if (minutes > 10) {
  //             setMinutes(minutes - 1);
  //             setSeconds(59);
  //           } else {
  //             setMinutes("0" + (minutes - 1).toString());
  //             setSeconds(59);
  //           }
  //         }
  //       }
  //     }, 1000);

  //     return () => {
  //       clearInterval(countdownTimer);
  //     };
  //   }
  // }, [startTimer, minutes, seconds]);

  return (
    <CountdownWrap>
      <StartButton
        onClick={() => {
          if (minutes !== "00" || seconds !== "00") {
            if (list.length !== 0) {
              dispatch(getTotalSeconds(Number(minutes) * 60 + Number(seconds)));
              // setTotalSeconds(Number(minutes) * 60 + Number(seconds));
              // setStartTimer(true);
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
        {/* {minutes}：{seconds} */}
        {totalSeconds !== null
          ? timeFormat(Math.floor(totalSeconds / 60))
          : minutes}
        :{totalSeconds !== null ? timeFormat(totalSeconds % 60) : seconds}
      </Time>
    </CountdownWrap>
  );
};

export default React.memo(Countdown);
