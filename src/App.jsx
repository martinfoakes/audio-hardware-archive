import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";

import Home from "./Containers/Home/Home";
import Tr909 from "./Containers/TR909/Tr909";
import SynthLogo from "./Img/synth-logo.svg";
import GlobalStyle from "./Style/GlobalStyle";

const AppBody = styled.div`
  display: flex;
  flex-direction: column;
`;

const AppHeader = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const HomeLink = styled.a`
  width: 4rem;
`;

function App() {
  return (
    <Router>
      <AppBody>
        <AppHeader>
          <HomeLink href="/">
            <img alt="Home" src={SynthLogo} />
          </HomeLink>
          <h1>{"Audio Hardware Archive"}</h1>
        </AppHeader>
        <GlobalStyle />
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route exact path="/tr-909" render={() => <Tr909 />} />
        </Switch>
      </AppBody>
    </Router>
  );
}

export default App;
