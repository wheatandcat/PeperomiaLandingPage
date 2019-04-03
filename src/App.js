import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Top from "./components/pages/Top";
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
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography variant="h5" color="inherit">
              <img src={icon} height="50" alt="icon" />
            </Typography>
          </Toolbar>
        </AppBar>
        <div style={{ backgroundColor: "#28AEB2", height: "100%" }}>
          <Top />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(App);
