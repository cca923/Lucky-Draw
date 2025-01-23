import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getTotalSeconds } from "../../../redux/action";
import {
  ButtonWrap,
  EachInput,
  ErrorWrap,
  InputUnit,
  InputWrap,
  ResetButton,
  SetTimerWrap,
  SettingButton,
  SettingWrap,
} from "./styles";

import { StyledInput } from "../../../styles";

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
            <StyledInput type="number" ref={inputMinutes} min="0" />
            <InputUnit>分</InputUnit>
          </EachInput>

          <EachInput>
            <StyledInput type="number" ref={inputSeconds} min="0" />
            <InputUnit>秒</InputUnit>
          </EachInput>
        </InputWrap>

        <ButtonWrap>
          <SettingButton
            timerStatus={timerStatus}
            onClick={setTimer}
            disabled={timerStatus ? true : false}
          >
            Set
          </SettingButton>
          <ResetButton
            timerStatus={timerStatus}
            onClick={resetTimer}
            disabled={timerStatus ? true : false}
          >
            Clear
          </ResetButton>
        </ButtonWrap>
      </SetTimerWrap>

      {errorMessage ? <ErrorWrap>{errorMessage}</ErrorWrap> : null}
    </SettingWrap>
  );
};

export default React.memo(Setting);
