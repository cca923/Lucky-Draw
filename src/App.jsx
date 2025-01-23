import React from "react";

import Timer from "./container/Timer";
import Board from "./container/Board";
import { StyledContainer } from "./styles";

function App() {
  return (
    <StyledContainer>
      <Timer />
      <Board />
    </StyledContainer>
  );
}

export default App;
