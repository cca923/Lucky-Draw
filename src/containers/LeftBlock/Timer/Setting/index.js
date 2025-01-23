import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import {
  StyledContainer,
  StyledInputContainer,
  StyledBtnContainer,
  StyledClearButton,
  StyledError,
} from "./styles";

import { StyledInput } from "../../../../styles";
import { StyledCommonButton } from "../../../../styles/button";
import { actInfoSelector } from "../../../../store/selector";
import { isValidTimeInput } from "../../../../utils";

const Setting = ({ className, onSet }) => {
  const { isCountdown } = useSelector(actInfoSelector);
  const minRef = useRef();
  const secRef = useRef();
  const [errorMessage, setErrorMessage] = useState("");

  const resetInput = () => {
    setErrorMessage("");
    minRef.current.value = "";
    secRef.current.value = "";
  };

  const handleSetTimer = () => {
    const min = Number(minRef?.current?.value ?? 0);
    const sec = Number(secRef?.current?.value ?? 0);
    const isValid = isValidTimeInput(min) && isValidTimeInput(sec);

    if (!isValid) {
      return setErrorMessage(
        "Please enter a positive integer between 0 and 59."
      );
    }
    resetInput();
    onSet?.({ sec: min * 60 + sec });
  };

  const handleResetTimer = () => {
    resetInput();
    onSet?.({ sec: 0 });
  };

  return (
    <div className={className}>
      <StyledContainer>
        <StyledInputContainer>
          <div>
            <StyledInput type="number" ref={minRef} min="0" mr="0.5rem" />
            min
          </div>
          <div>
            <StyledInput type="number" ref={secRef} min="0" mr="0.5rem" />
            sec
          </div>
        </StyledInputContainer>

        <StyledBtnContainer>
          <StyledCommonButton
            onClick={handleSetTimer}
            disabled={isCountdown}
            mr="0.5rem"
          >
            Set
          </StyledCommonButton>
          <StyledClearButton onClick={handleResetTimer} disabled={isCountdown}>
            Clear
          </StyledClearButton>
        </StyledBtnContainer>
      </StyledContainer>

      {errorMessage ? <StyledError>{errorMessage}</StyledError> : null}
    </div>
  );
};

export default styled(Setting)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
