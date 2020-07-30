import React from 'react';
import styled from 'styled-components';
import Divider from '@material-ui/core/Divider';
import { green } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import icon from '../../images/icon@2x.png';
import app from '../../images/app.png';
import backend from '../../images/backend.png';
import web from '../../images/web.png';
import help from '../../images/help.png';
import landing from '../../images/landing.png';
import googlePlayBadge from '../../images/google-play-badge.png';
import appleStore from '../../images/apple-store.svg';
import AppFooter from '../organisms/AppFooter';

export default () => {
  return (
    <div>
      <Header>
        <img src={icon} height={200} width={200} alt="icon" />
        <div className="title">ペペロミアとは</div>
        <div className="description">
          ペペロミアは以下の思想で作成されたプロジェクトです。
          <br />
          ・デザイン、システム設計、開発、リリース、運用の流れを一通り体験できる
          <br />
          ・多くのモダンな技術を活用できる
          <br />
          ・コードは全てGitHubで公開する
          <br />
          <br />
          現在ペペロミアでは以下のプロジェクトがが公開されています <br />
        </div>
      </Header>
      <Content>
        <div className="item">
          <dvi>
            <div className="title">Peperomia</div>
            <a
              href="https://github.com/wheatandcat/Peperomia"
              rel="noopener noreferrer"
              target="_blank"
            >
              https://github.com/wheatandcat/Peperomia
            </a>
            <div className="description">React Nativeで作成されたアプリ</div>
            <div className="app-icon">
              <a
                href="https://itunes.apple.com/us/app/%E3%83%9A%E3%83%9A%E3%83%AD%E3%83%9F%E3%82%A2/id1460583871?l=ja#?platform=iphone"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img src={appleStore} height="40" alt="apple store" />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.wheatandcat.peperomia"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img
                  src={googlePlayBadge}
                  height="60"
                  alt="google play store"
                />
              </a>
            </div>
          </dvi>
        </div>
        <div className="image">
          <img src={app} height={200} alt="icon" />
        </div>
      </Content>
      <Divider />
      <Content>
        <div className="image">
          <img src={backend} height={200} alt="icon" />
        </div>
        <div className="item">
          <dvi>
            <div className="title">PeperomiaBackend</div>
            <a
              href="https://github.com/wheatandcat/PeperomiaBackend"
              rel="noopener noreferrer"
              target="_blank"
            >
              https://github.com/wheatandcat/PeperomiaBackend
            </a>
            <div className="description">Go言語で作成されたバックエンドAPI</div>
            <div>
              <ColorButton
                variant="contained"
                color="primary"
                href="https://app.swaggerhub.com/apis-docs/wheatandcat/peperomia/1.0.0"
                rel="noopener noreferrer"
                target="_blank"
              >
                API ドキュメント
              </ColorButton>
            </div>
          </dvi>
        </div>
      </Content>
      <Divider />
      <Content>
        <div className="item">
          <dvi>
            <div className="title">PeperomiaWeb</div>
            <a
              href="https://github.com/wheatandcat/PeperomiaWeb"
              rel="noopener noreferrer"
              target="_blank"
            >
              https://github.com/wheatandcat/PeperomiaWeb
            </a>
            <div className="description">Nuxt.jsで作られたWebサイト</div>
            <div>
              <ColorButton
                variant="contained"
                color="primary"
                href="https://app.peperomia.info"
                rel="noopener noreferrer"
                target="_blank"
              >
                Web サイト
              </ColorButton>
            </div>
          </dvi>
        </div>
        <div className="image">
          <img src={web} height={200} alt="icon" />
        </div>
      </Content>
      <Divider />
      <Content>
        <div className="image">
          <img src={help} height={200} alt="icon" />
        </div>
        <div className="item">
          <dvi>
            <div className="title">PeperomiaHelp</div>
            <a
              href="https://github.com/wheatandcat/PeperomiaHelp"
              rel="noopener noreferrer"
              target="_blank"
            >
              https://github.com/wheatandcat/PeperomiaHelp
            </a>
            <div className="description">GatsbyJSで作られたヘルプサイト</div>
            <div>
              <ColorButton
                variant="contained"
                color="primary"
                href="https://amazing-hawking-a280c3.netlify.app/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Web サイト
              </ColorButton>
            </div>
          </dvi>
        </div>
      </Content>
      <Divider />
      <Content>
        <div className="item">
          <dvi>
            <div className="title">PeperomiaLandingPage</div>
            <a
              href="https://github.com/wheatandcat/PeperomiaLandingPage"
              rel="noopener noreferrer"
              target="_blank"
            >
              https://github.com/wheatandcat/PeperomiaLandingPage
            </a>
            <div className="description">Reactで作成されたLPページ</div>
            <div>
              <ColorButton
                variant="contained"
                color="primary"
                href="https://peperomia.app"
                rel="noopener noreferrer"
                target="_blank"
              >
                Web サイト
              </ColorButton>
            </div>
          </dvi>
        </div>
        <div className="image">
          <img src={landing} height={200} alt="icon" />
        </div>
      </Content>
      <Divider />

      <AppFooter />
    </div>
  );
};

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${(props) => props.theme.color.main};
  color: ${(props) => props.theme.color.highLightGray};
  font-size: 18px;
  line-height: 28px;

  .title {
    font-size: 36px;
    line-height: 36px;
    font-weight: bold;
  }

  .description {
    padding: 4rem 0;
  }

  @media screen and (max-width: 767px) {
    font-size: 12px;
    line-height: 18px;

    .title {
      font-size: 18px;
      line-height: 18px;
      font-weight: bold;
    }
  }
`;

const Content = styled.div`
  background-color: ${(props) => props.theme.color.white};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;

  @media screen and (max-width: 767px) {
    flex-direction: column;
  }

  .item {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    a {
      font-size: 12px;
    }

    .title {
      font-size: 18px;
      font-weight: bold;
    }

    .description {
      font-size: 16px;
      padding: 1.5rem 0;
    }

    .app-icon {
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }
  }

  .image {
    width: 50%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    @media screen and (max-width: 767px) {
      padding: 1.5rem 0;
    }
  }
`;

const ColorButton = withStyles((theme) => ({
  root: {
    color: '#FFF',
    backgroundColor: green[800],
    '&:hover': {
      backgroundColor: green[900],
    },
  },
}))(Button);
