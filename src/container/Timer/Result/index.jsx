import React from "react";
import { useSelector } from "react-redux";
import {
  ClearResultButton,
  Loading,
  ResultWrap,
  WinnerImageWrap,
  WinnerName,
  WinnerWrap,
} from "./styles";

const Result = ({ winner, setWinner }) => {
  const timerStatus = useSelector((state) => state.timerStatus);

  return (
    <ResultWrap>
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
    </ResultWrap>
  );
};

export default Result;
