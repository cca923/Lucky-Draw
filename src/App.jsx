import React from "react";

import LeftBlock from "./container/LeftBlock";
import RightBlock from "./container/RightBlock";
import { StyledContainer } from "./styles";

function App() {
  return (
    <StyledContainer>
      <LeftBlock />
      <RightBlock />
    </StyledContainer>
  );
}

export default App;
