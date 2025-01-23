import React from "react";
import { useSelector } from "react-redux";
import { actInfoSelector } from "../../../redux/selector";
import { StyledTitle, StyledBlock } from "../../../styles";
import { StyledContainer, StyledImage } from "./styles";
import Winner from "./Winner";

const Result = () => {
  const { isCountdown, winner } = useSelector(actInfoSelector);

  return (
    <StyledContainer>
      <StyledTitle bg="#e9e9e9">Winner</StyledTitle>
      <StyledBlock display="flex">
        <StyledImage />
        <Winner isCountdown={isCountdown} winner={winner} />
      </StyledBlock>
    </StyledContainer>
  );
};

export default Result;
