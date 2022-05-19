import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";

import SideNavBar from "./components/SideNavBar";
import Discover from "./pages/discover";
import theme from "./theme";

import "./css/app.scss";
import { MovieProvider } from "./movie-context";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MovieProvider>
        <Router>
          <PageContainer>
            <SideNavBar />
            <ContentWrapper>
              <Switch>
                <Route path="/discover" component={Discover} />
              </Switch>
            </ContentWrapper>
          </PageContainer>
        </Router>
      </MovieProvider>
    </ThemeProvider>
  );
}

export default App;

const ContentWrapper = styled.div`
  padding-left: 280px;
  @media only screen and (max-width: 800px) {
    padding-left: 0px;
  }
`;

const PageContainer = styled.main`
  overflow-x: hidden;
`;
