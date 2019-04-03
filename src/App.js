import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Top from "./components/pages/Top";
import Tos from "./components/pages/Tos";
import Policy from "./components/pages/Policy";
import icon from "./images/icon.png";

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
          <AppBar position="static" color="default">
            <Toolbar>
              <Typography variant="h5" color="inherit">
                <img src={icon} height="50" alt="icon" />
              </Typography>
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
