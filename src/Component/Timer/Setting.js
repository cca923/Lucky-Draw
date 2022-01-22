import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { getTotalSeconds } from "../../Redux/Action";
import { Button } from "../Common/button";

const SettingWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

const SetTimerWrap = styled.div`
  display: flex;
`;

const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 1rem;
  width: 100%;
`;

const EachInput = styled.div`
  display: flex;
`;

const TimeInput = styled.input`
  width: 100%;
  height: 3rem;
  border-radius: 25px;
  border: 2px solid #bfc0c0;
  margin: 0.3rem 0;
  padding: 1rem;
`;

const InputUnit = styled.div`
  display: flex;
  align-items: center;
  margin-left: 0.5rem;
`;

const ButtonWrap = styled.div`
  display: flex;
`;

const SettingButton = styled(Button)`
  margin: auto 1rem;
  background-color: #abc4ff;
  border: 2px solid #cddafd;
  cursor: ${(props) => (props.timerStatus ? "not-allowed" : "pointer")};
`;

const ResetButton = styled(Button)`
  margin: auto;
  border: 2px solid #e9e9e9;
  cursor: ${(props) => (props.timerStatus ? "not-allowed" : "pointer")};

  &:hover {
    background-color: #ced4da;
  }
`;

const ErrorWrap = styled.div`
  text-align: center;
  color: red;
  margin-top: 0.5rem;
`;

const Setting = () => {
  const timerStatus = useSelector((state) => state.timerStatus);
  const dispatch = useDispatch();

  const inputMinutes = useRef();
  const inputSeconds = useRef();
  const [errorMessage, setErrorMessage] = useState();

  const setTimer = () => {
    const minutes = inputMinutes.current.value;
    const seconds = inputSeconds.current.value;

    if (minutes && seconds) {
      if (/^[0-9]+$/.test(minutes) && /^[0-9]+$/.test(seconds)) {
        if (minutes > 59) {
          setErrorMessage("請輸入介於 0 - 59 之間的分鐘數");
        } else if (seconds > 59) {
          setErrorMessage("請輸入介於 0 - 59 之間的秒數");
        } else {
          setErrorMessage();
          dispatch(getTotalSeconds(Number(minutes) * 60 + Number(seconds)));
        }
      } else {
        setErrorMessage("請輸入介於 0 - 59 之間的正整數");
      }
    } else if (/^[0-9]+$/.test(minutes)) {
      if (minutes > 59) {
        setErrorMessage("請輸入介於 0 - 59 之間的分鐘數");
      } else {
        setErrorMessage();
        dispatch(getTotalSeconds(Number(minutes) * 60));
      }
    } else if (/^[0-9]+$/.test(seconds)) {
      if (seconds > 59) {
        setErrorMessage("請輸入介於 0 - 59 之間的秒數");
      } else {
        setErrorMessage();
        dispatch(getTotalSeconds(Number(seconds)));
      }
    } else {
      setErrorMessage("請輸入介於 0 - 59 之間的正整數");
    }
  };

  const resetTimer = () => {
    dispatch(getTotalSeconds(0));
    setErrorMessage();

    inputMinutes.current.value = "";
    inputSeconds.current.value = "";
  };

  return (
    <SettingWrap>
      <SetTimerWrap>
        <InputWrap>
          <EachInput>
            <TimeInput type="number" ref={inputMinutes} min="0" />
            <InputUnit>分</InputUnit>
          </EachInput>

          <EachInput>
            <TimeInput type="number" ref={inputSeconds} min="0" />
            <InputUnit>秒</InputUnit>
          </EachInput>
        </InputWrap>

        <ButtonWrap>
          <SettingButton
            timerStatus={timerStatus}
            onClick={setTimer}
            disabled={timerStatus ? true : false}>
            設定
          </SettingButton>
          <ResetButton
            timerStatus={timerStatus}
            onClick={resetTimer}
            disabled={timerStatus ? true : false}>
            重設
          </ResetButton>
        </ButtonWrap>
      </SetTimerWrap>

      {errorMessage ? <ErrorWrap>{errorMessage}</ErrorWrap> : null}
    </SettingWrap>
  );
};

export default React.memo(Setting);
