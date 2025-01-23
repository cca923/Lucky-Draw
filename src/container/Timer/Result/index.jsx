import React from "react";
import { useSelector } from "react-redux";
import {
  ClearResultButton,
  Loading,
  StyledContainer,
  WinnerImageWrap,
  WinnerName,
  WinnerWrap,
} from "./styles";

const Result = ({ winner, setWinner }) => {
  const timerStatus = useSelector((state) => state.timerStatus);

  return (
    <StyledContainer>
      <WinnerImageWrap />
      <WinnerWrap>
        {timerStatus ? (
          <Loading />
        ) : (
          <>
            {winner ? <ClearResultButton onClick={() => setWinner()} /> : null}
            {<WinnerName>{winner || "?"}</WinnerName>}
          </>
        )}
      </WinnerWrap>
    </StyledContainer>
  );
};

export default Result;
