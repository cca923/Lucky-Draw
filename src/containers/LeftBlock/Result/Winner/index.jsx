import React from "react";
import { StyledLoading } from "../../../../styles";
import { StyledContainer, StyledName } from "./styles";

const Winner = ({ isCountdown, winner }) => {
  return (
    <StyledContainer>
      {isCountdown ? (
        <StyledLoading />
      ) : (
        <StyledName>{winner || "?"}</StyledName>
      )}
    </StyledContainer>
  );
};

export default Winner;
