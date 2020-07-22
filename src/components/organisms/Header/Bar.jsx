import React from 'react';
import 'intersection-observer';
import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';
import Fab from '@material-ui/core/Fab';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import icon from '../../../images/icon.png';
import github from '../../../images/github.png';

export default () => {
  return (
    <AppBar position="static" color="default">
      <IconButton href="https://peperomia.app">
        <img src={icon} height="30" alt="icon" />
      </IconButton>
      <ButtonContainer>
        <RouteLink to="/information">
          <ColorButton variant="contained" color="primary" to="/information">
            リリースノート
          </ColorButton>
        </RouteLink>
        <Fab size="small">
          <IconButton
            href="https://github.com/wheatandcat/Peperomia"
            target="_blank"
          >
            <img src={github} height="25" alt="github" style={{ right: 0 }} />
          </IconButton>
        </Fab>
      </ButtonContainer>
    </AppBar>
  );
};

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(blue[500]),
    backgroundColor: blue[500],
    '&:hover': {
      backgroundColor: blue[700],
    },
  },
}))(Button);

const AppBar = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => props.theme.color.main};
  height: 55px;
`;

const RouteLink = styled(Link)`
  text-decoration: none;
`;

const ButtonContainer = styled.div`
  button {
    margin: 0.25rem 0.5rem;
  }
`;
