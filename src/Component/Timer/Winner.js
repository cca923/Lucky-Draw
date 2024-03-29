import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import { DeleteButton } from "../Common/button";

const ResultWrap = styled.div`
  width: 100%;
  height: 100%;
  min-height: 15rem;
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

const WinnerName = styled.div`
  max-width: 80%;
  font-size: 3rem;
  font-weight: 600;
  line-height: 5rem;
  margin: auto;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
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

const Winner = ({ winner, setWinner }) => {
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

export default Winner;
