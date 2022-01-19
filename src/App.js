import React from "react";
import styled from "styled-components";

import Timer from "./Component/Timer";
import List from "./Component/List";

const Main = styled.main`
  display: flex;
  height: 100vh;

  @media only screen and (max-width: 900px) {
    flex-direction: column;
  }
`;

function App() {
  return (
    <Main>
      <Timer />
      <List />
    </Main>
  );
}

export default App;
