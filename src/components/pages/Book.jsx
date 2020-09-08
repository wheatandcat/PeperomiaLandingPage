import React from 'react';
import styled from 'styled-components';
import Divider from '@material-ui/core/Divider';
import icon from '../../images/icon@2x.png';
import cover02 from '../../images/doujinshi/cover02.jpg';
import cover01 from '../../images/doujinshi/cover01.png';
import { Button } from '@material-ui/core';

import AppFooter from '../organisms/AppFooter';

export default () => {
  return (
    <div>
      <Header>
        <img src={icon} height={40} width={40} alt="icon" />
        <div className="title">技術書一覧</div>
      </Header>
      <Content>
        <div className="image">
          <Link
            href="https://wheatandcat.booth.pm/items/2359446"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img src={cover02} height={250} alt="icon" />
          </Link>
        </div>
        <div className="item">
          <dvi>
            <div className="title">ペペロミア開発日記 in 2020</div>
          </dvi>
          <div>
            <div class="book-info">著者：wheatandcat(飯野 陽平)</div>
            <div class="book-info">出版日： 2020年9月7日</div>
          </div>
          <div>
            <Link
              href="https://wheatandcat.booth.pm/items/2359446"
              rel="noopener noreferrer"
              target="_blank"
            >
              <CheckButton variant="contained">商品ページを確認</CheckButton>
            </Link>
          </div>
        </div>
      </Content>

      <Divider />
      <Content>
        <div className="image">
          <Link
            href="https://wheatandcat.booth.pm/items/1560279"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img src={cover01} height={250} alt="icon" />
          </Link>
        </div>
        <div className="item">
          <dvi>
            <div className="title">
              React Native開発日記
              -スケジュール管理アプリ「ペペロミア」が出来るまで-
            </div>
          </dvi>
          <div>
            <div class="book-info">著者：wheatandcat(飯野 陽平)</div>
            <div class="book-info">出版日： 2019年9月22日</div>
          </div>
          <div>
            <Link
              href="https://wheatandcat.booth.pm/items/1560279"
              rel="noopener noreferrer"
              target="_blank"
            >
              <CheckButton variant="contained">商品ページを確認</CheckButton>
            </Link>
          </div>
        </div>
      </Content>
      <AppFooter />
    </div>
  );
};

const Header = styled.div`
  background-color: ${(props) => props.theme.color.main};
  color: ${(props) => props.theme.color.highLightGray};
  height: 280px;
  display: flex;
  justify-content: center;
  align-items: center;

  .title {
    font-size: 28px;
    font-weight: bold;
  }
  > div {
    padding-left: 1rem;
  }
`;

const Content = styled.div`
  background-color: ${(props) => props.theme.color.white};
  display: flex;
  justify-content: center;
  padding: 2rem 0;

  @media screen and (max-width: 767px) {
    flex-direction: column;
  }

  .item {
    width: 50%;
    padding: 0 1rem;
    display: flex;
    justify-content: space-between;
    flex-direction: column;

    a {
      font-size: 12px;
    }

    .title {
      font-size: 22px;
      font-weight: bold;
      @media screen and (max-width: 767px) {
        padding: 1rem;
      }
    }

    .book-info {
      font-size: 14px;
    }

    @media screen and (max-width: 767px) {
      min-height: 180px;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }

  .image {
    width: 320px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    img {
      box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.5);
    }

    @media screen and (max-width: 767px) {
      width: 100%;
      height: 300px;
      display: flex;
      justify-content: center;
    }
  }
`;

const CheckButton = styled(Button)`
  background-color: #eb5757 !important;
  color: ${(props) => props.theme.color.white} !important;
  font-weight: 800 !important;
  margin: 5px 0 !important;
  font-size: 16px !important;
  padding: 6px 25px !important;
  border-radius: 10px !important;
  min-height: 40px !important;
`;

const Link = styled.a`
  text-decoration: none;
`;
