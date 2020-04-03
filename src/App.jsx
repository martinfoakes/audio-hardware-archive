import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";

import Home from "./Containers/Home/Home";
import Tr909 from "./Containers/TR909/Tr909";
import Tr808 from "./Containers/TR808/Tr808";
import Tr707 from "./Containers/TR707/Tr707";
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
  margin: 0 2rem;
`;

const HomeLink = styled.a`
  width: 4rem;
  margin: 0 1rem 0 0;
`;

function App() {
  return (
    <Router basename="/">
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
          <Route exact path="/tr-808" render={() => <Tr808 />} />
          <Route exact path="/tr-707" render={() => <Tr707 />} />
        </Switch>
      </AppBody>
    </Router>
  );
}

export default App;
