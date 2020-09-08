import React, { Component } from 'react';
import styled from 'styled-components';
import cover from '../../images/doujinshi/cover02.jpg';
import boothicon from '../../images/doujinshi/200x40_01.png';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

export default class extends Component {
  render() {
    return (
      <>
        <ItemContainer>
          <div>
            <BookImage src={cover} />
          </div>
          <div>
            <Title>同人誌作りました。</Title>
            <Description>
              技術書典9に出展予定（2020年9月12日 ～ 9月22日）
            </Description>
            <EventInfo>
              <div>
                ペペロミアの2019〜2020年のリリース内容の振り返りと現在のプロジェクトのアーキテクトについて解説しています。
              </div>
              <br />
              <MainLink>
                <a
                  href="https://booth.pm/ja/items/2359446"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  内容の詳細は、こちら
                </a>
              </MainLink>
              <br />
              <SubLink>
                <RouteLink to="/books">過去の技術本一覧 ▼</RouteLink>
              </SubLink>
            </EventInfo>
          </div>
        </ItemContainer>
        <ItemContainer2>
          <div>
            <BoothIcon src={boothicon} />
            <BoothText>BOOTHにてダウンロード販売も行っています。</BoothText>
          </div>
          <StoreContainer>
            <a
              href="https://wheatandcat.booth.pm/items/1560279"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Cycle>
                <CycleInImage src={cover} />
                <CheckButton variant="contained">商品ページを確認</CheckButton>
              </Cycle>
            </a>
          </StoreContainer>
        </ItemContainer2>
      </>
    );
  }
}

const ItemContainer = styled.div`
  background-color: #4caf50;
  padding: 15px;
  border: solid 3px #6fcf97;
  display: flex;
  align-items: center;
  justify-content: center;

  > div:first-child {
    padding: 0 1rem;
    width: 240px;
  }

  > div:last-child {
    width: 480px;
  }

  @media screen and (max-width: 900px) {
    flex-direction: column;
    padding: 1rem 0;

    > div:first-child {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    > div:last-child {
      padding: 1rem 1.5rem;
      width: 100%;
    }
  }
`;

const ItemContainer2 = styled.div`
  background-color: #98d181;
  padding: 15px;
  border: solid 3px #6fcf97;
  display: flex;
  align-items: center;
  justify-content: center;

  > div {
    padding: 0 1rem;
    width: 360px;
  }

  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
`;

const BookImage = styled.img`
  height: 260px;
  border: solid 1px ${(props) => props.theme.color.gray};
`;

const Title = styled.div`
  color: ${(props) => props.theme.color.white};
  font-size: 2rem;
  font-weight: 900;
  padding-bottom: 1rem;
  padding-left: 15px;

  @media screen and (max-width: 900px) {
    text-align: center;
  }
`;

const Description = styled.div`
  color: ${(props) => props.theme.color.white};
  font-size: 0.9rem;
  font-weight: 600;
  padding: 0 15px;

  @media screen and (max-width: 900px) {
    font-size: 0.7rem;
    text-align: center;
  }
`;

const EventInfo = styled.div`
  color: ${(props) => props.theme.color.black};
  font-size: 0.8rem;
  font-weight: 600;
  padding: 15px;
  line-height: 1.6rem;
`;

const SubLink = styled.div`
  font-size: 10px;
  line-height: 1rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const MainLink = styled.div`
  font-size: 14px;
  line-height: 1rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const BoothIcon = styled.img`
  height: 20px;
`;

const BoothText = styled.div`
  padding: 20px 0;
  color: ${(props) => props.theme.color.black};
  font-size: 0.9rem;
  font-weight: 800;

  @media screen and (max-width: 900px) {
    text-align: center;
  }
`;

const StoreContainer = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
`;

const Cycle = styled.div`
  left: 25%;
  width: 200px;
  height: 200px;
  background-color: #f2f2f2;
  border-radius: 100px;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const CycleInImage = styled.img`
  margin-top: 30px;
  height: 140px;
  border: solid 1px #ccc;
`;

const CheckButton = styled(Button)`
  background-color: #eb5757 !important;
  color: ${(props) => props.theme.color.white} !important;
  font-weight: 800 !important;
  margin: 5px 0 !important;
  font-size: 12px !important;
  padding: 6px 25px !important;
  border-radius: 25px !important;
  min-height: 40px !important;
`;

const RouteLink = styled(Link)``;
