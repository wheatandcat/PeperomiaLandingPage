import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useSpring, animated } from 'react-spring';
import Iframe from 'react-iframe';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import { styled as materialStyled } from '@material-ui/core/styles';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import iphoneScreen from '../../images/iphone_screen.png';
import useWindowSize from '../../hooks/useWindowSize';
import googlePlayBadge from '../../images/google-play-badge.png';
import appleStore from '../../images/apple-store.svg';
import icon from '../../images/icon@2x.png';
import theme from '../../theme';
import { SlowUp } from './Animation';

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1,
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

export default () => {
  const [state] = useState({
    prototype: false,
    loading: false,
    success: false,
    snackbar: false,
  });

  const size = useWindowSize();
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }));

  return (
    <Root>
      <>
        <Snackbar
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={state.snackbar}
          autoHideDuration={6000}
        >
          <MySnackbarContent
            message={
              <PreviewStartText id="client-snackbar">
                <CheckCircleIcon
                  style={{
                    paddingRight: 10,
                  }}
                />
                プレビューモードがONになりました
              </PreviewStartText>
            }
          />
        </Snackbar>
      </>
      <Grid container>
        <TopImageContainer item sm={6} xs={12}>
          <CenterContainer>
            <img src={icon} height={size.height * 0.4} alt="icon" />
          </CenterContainer>

          <Title>ペペロミア</Title>
          <SubTitle>簡単操作で予定を作成できる！</SubTitle>
          <CenterContainer>
            <a
              href="https://itunes.apple.com/us/app/%E3%83%9A%E3%83%9A%E3%83%AD%E3%83%9F%E3%82%A2/id1460583871?l=ja#?platform=iphone"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img src={appleStore} height="50" alt="apple store" />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.wheatandcat.peperomia"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img src={googlePlayBadge} height="75" alt="google play store" />
            </a>
          </CenterContainer>
        </TopImageContainer>
        <ProtoContainer item sm={6} xs={12}>
          <SlowUp>
            <div
              style={{
                position: 'absolute',
                paddingBottom: 390,
                paddingRight: 190,
              }}
            >
              {state.loading && (
                <CircularProgress
                  color="primary"
                  size={68}
                  style={{
                    position: 'absolute',
                    top: -6,
                    left: -6,
                    zIndex: 1,
                  }}
                />
              )}
            </div>
            {!state.prototype && (
              <animated.img
                src={iphoneScreen}
                height={size.height * 0.8}
                alt="apple store"
                onMouseMove={({ clientX: x, clientY: y }) =>
                  set({ xys: calc(x, y) })
                }
                onMouseLeave={() => set({ xys: [0, 0, 1] })}
                style={{ transform: props.xys.interpolate(trans) }}
              />
            )}
          </SlowUp>
          {state.prototype && (
            <Iframe
              url="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FYYon1ahSQ7W15Mug0LsovHws%2F%25E3%2583%259A%25E3%2583%259A%25E3%2583%25AD%25E3%2583%259F%25E3%2582%25A2%3Fnode-id%3D28%253A41%26viewport%3D-2163%252C-91%252C0.6853333115577698%26scaling%3Dscale-down"
              width="100%"
              height="100%"
              position="relative"
            />
          )}
        </ProtoContainer>
      </Grid>
    </Root>
  );
};

const Root = styled.div`
  background-color: ${(props) => props.theme.color.main};
`;

const TopImageContainer = styled(Grid)`
  background-color: ${(props) => props.theme.color.main};
  padding-top: 2.5rem;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CenterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  font-weight: 600;
  color: ${(props) => props.theme.color.highLightGray};
`;

const SubTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.25rem;
  font-weight: 500;
  color: ${(props) => props.theme.color.highLightGray};
`;

const ProtoContainer = styled(Grid)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.color.main};
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const MySnackbarContent = materialStyled(SnackbarContent)({
  backgroundColor: theme.color.lightGreen,
});

const PreviewStartText = styled.span`
  color: ${(props) => props.theme.color.main};
  display: flex;
  align-items: center;
  font-weight: 600;
`;
