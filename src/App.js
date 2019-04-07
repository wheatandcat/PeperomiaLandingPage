import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Top from "./components/pages/Top";
import Tos from "./components/pages/Tos";
import Policy from "./components/pages/Policy";
import icon from "./images/icon.png";
import github from "./images/github.png";

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
        <div className={classes.root}>
          <AppBar position="static" color="default" style={{ height: "70px" }}>
            <Toolbar>
              <Typography variant="h5" color="inherit" style={{ flexGrow: 1 }}>
                <img src={icon} height="50" alt="icon" />
              </Typography>
              <IconButton
                href="https://github.com/wheatandcat/Peperomia"
                target="_blank"
              >
                <img
                  src={github}
                  height="28"
                  alt="github"
                  style={{ right: 0 }}
                />
              </IconButton>
            </Toolbar>
          </AppBar>
          <div style={{ backgroundColor: "#28AEB2", height: "100%" }}>
            <Route path="/" exact component={Top} />
            <Route path="/tos" exact component={Tos} />
            <Route path="/policy" exact component={Policy} />
          </div>
        </div>
      </Router>
    );
  }
}

export default withStyles(styles)(App);
