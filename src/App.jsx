import React from "react";

import LeftBlock from "./containers/LeftBlock";
import RightBlock from "./containers/RightBlock";
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
