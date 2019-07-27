import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { withStyles, createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider as MaterialUIThemeProvider } from "@material-ui/styles";
import styled, { ThemeProvider } from "styled-components";
import IconButton from "@material-ui/core/IconButton";
import Top from "./components/pages/Top";
import Tos from "./components/pages/Tos";
import Policy from "./components/pages/Policy";
import icon from "./images/icon.png";
import github from "./images/github.png";
import theme from "./theme";

const uiTheme = createMuiTheme({
  palette: {
    primary: {
      main: theme.color.lightGreen
    },
    secondary: {
      main: theme.color.lightBlue
    },
    default: {
      main: theme.color.main
    }
  }
});

const styles = {
  root: {
    flexGrow: 1,
    height: "100vh"
  }
};

class App extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Router>
        <MaterialUIThemeProvider theme={uiTheme}>
          <ThemeProvider theme={theme}>
            <div className={classes.root}>
              <AppBar position="static" color="default">
                <IconButton href="https://peperomia.app">
                  <img src={icon} height="30" alt="icon" />
                </IconButton>
                <IconButton
                  href="https://github.com/wheatandcat/Peperomia"
                  target="_blank"
                  style={{}}
                >
                  <img
                    src={github}
                    height="25"
                    alt="github"
                    style={{ right: 0 }}
                  />
                </IconButton>
              </AppBar>
              <div style={{ backgroundColor: "#28AEB2", height: "100%" }}>
                <Route path="/" exact component={Top} />
                <Route path="/tos" exact component={Tos} />
                <Route path="/policy" exact component={Policy} />
              </div>
            </div>
          </ThemeProvider>
        </MaterialUIThemeProvider>
      </Router>
    );
  }
}

const AppBar = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${props => props.theme.color.main};
  height: 55px;
`;

export default withStyles(styles)(App);
