import React, { useState } from "react";
import styled from "styled-components";

import Setting from "./Setting";
import Countdown from "./Countdown";
import { DeleteButton } from "../Common/button";

const TimerWrap = styled.div`
  width: 50%;
  height: 100vh;
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 900px) {
    width: 100%;
  }
`;

const Title = styled.div`
  width: 100%;
  background-color: #e9e9e9;
  font-size: 1.5rem;
  font-weight: 600;
  padding: 1rem;
`;

const ResultWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 2rem 1rem;

  @media only screen and (max-width: 900px) {
    height: 15rem;
  }
`;

const WinnerImageWrap = styled.div`
  width: 50%;
  border-radius: 20px 0 0 20px;
  background-image: url(/images/winner.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const WinnerWrap = styled.div`
  width: 50%;
  height: 100%;
  border-radius: 0 20px 20px 0;
  background-color: #efefef;
  display: flex;
  position: relative;
`;

const Winner = styled.div`
  font-size: 3rem;
  font-weight: 600;
  margin: auto;
`;

const Loading = styled.div`
  width: 100%;
  object-fit: cover;
  border-radius: 20px 0 0 20px;
  background-image: url(/images/loading.gif);
  background-repeat: no-repeat;
  background-size: 180%;
  background-position: center;
`;

const ClearResultButton = styled(DeleteButton)`
  position: absolute;
  right: 0.5rem;
  top: 0.5rem;
`;

const Timer = () => {
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");
  const [loading, setLoading] = useState(false);
  const [winner, setWinner] = useState("");

  return (
    <TimerWrap>
      <Title>抽獎時間</Title>

      <Setting
        setTimerMinutes={setTimerMinutes}
        setTimerSeconds={setTimerSeconds}
      />

      <Countdown
        timerMinutes={timerMinutes}
        timerSeconds={timerSeconds}
        setTimerMinutes={setTimerMinutes}
        setTimerSeconds={setTimerSeconds}
        setLoading={setLoading}
        setWinner={setWinner}
      />

      <Title>抽獎結果</Title>
      <ResultWrap>
        <WinnerImageWrap />
        <WinnerWrap>
          {loading ? (
            <Loading />
          ) : (
            <>
              <ClearResultButton onClick={() => setWinner("")} />
              <Winner>{winner}</Winner>
            </>
          )}
        </WinnerWrap>
      </ResultWrap>
    </TimerWrap>
  );
};

export default Timer;
