import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { withStyles, createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider as MaterialUIThemeProvider } from '@material-ui/styles';
import 'intersection-observer';
import { ThemeProvider } from 'styled-components';

import Top from './components/pages/Top';
import Tos from './components/pages/Tos';
import Policy from './components/pages/Policy';
import Information from './components/pages/Information';
import About from './components/pages/About';
import Book from './components/pages/Book';
import Header from './components/organisms/Header/Bar';
import theme from './theme';

const uiTheme = createMuiTheme({
  palette: {
    primary: {
      main: theme.color.lightGreen,
    },
    secondary: {
      main: theme.color.lightBlue,
    },
    default: {
      main: theme.color.main,
    },
  },
});

const styles = {
  root: {
    flexGrow: 1,
    height: '100vh',
  },
};

class App extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Router>
        <MaterialUIThemeProvider theme={uiTheme}>
          <ThemeProvider theme={theme}>
            <div className={classes.root}>
              <Header />
              <div style={{ backgroundColor: '#28AEB2', height: '100%' }}>
                <Route path="/" exact component={Top} />
                <Route path="/tos" exact component={Tos} />
                <Route path="/policy" exact component={Policy} />
                <Route path="/information" exact component={Information} />
                <Route path="/about" exact component={About} />
                <Route path="/books" exact component={Book} />
              </div>
            </div>
          </ThemeProvider>
        </MaterialUIThemeProvider>
      </Router>
    );
  }
}

export default withStyles(styles)(App);
