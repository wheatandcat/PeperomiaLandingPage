import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import styled from "styled-components";
import cover from "../../images/doujinshi/cover.png";
import backcover from "../../images/doujinshi/backcover.png";
import spine from "../../images/doujinshi/spine.png";
import boothicon from "../../images/doujinshi/200x40_01.png";
import { Button } from "@material-ui/core";

export default class extends Component {
  render() {
    return (
      <Container item xs={12}>
        <Grid container justify="center">
          <Grid item sm={6} xs={12}>
            <BookContainer>
              <BookImage src={backcover} />
              <BookImage src={spine} />
              <BookImage src={cover} />
            </BookContainer>
          </Grid>
          <Grid item sm={6} xs={12} style={{ paddingTop: "15px" }}>
            <Title>同人誌作りました。</Title>
            <Description>
              技術書典7にてペペロミアの開発解説本を販売します。
            </Description>
            <EventInfo>
              <div>9月22日（日）</div>
              <div>池袋サンシャインシティ 展示ホールC/D (文化会館ビル2/3F)</div>
              <div>
                配置:<Place>い04C</Place>
              </div>
              <LinkTitle>■ サークル情報</LinkTitle>
              <Link>
                <a
                  href="https://techbookfest.org/event/tbf07/circle/5676671030001664"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  https://techbookfest.org/event/tbf07/circle/5676671030001664
                </a>
              </Link>
            </EventInfo>
          </Grid>
        </Grid>
        <Grid container justify="center">
          <Grid item xs={12} md={9} lg={6}>
            <BookTitkeContainer>
              <Description>
                React Native開発日記
                -スケジュール管理アプリ「ペペロミア」が出来るまで-
              </Description>
              <Price>¥1,000</Price>
            </BookTitkeContainer>
          </Grid>
          <Grid item md={3} lg={6}></Grid>
        </Grid>
        <BoothContainer container justify="center">
          <Grid item lg={1}></Grid>
          <BoothIconContainer item xs={12} md={6} lg={5}>
            <BoothIcon src={boothicon} />
            <BoothText>BOOTHにてダウンロード販売も行っています。</BoothText>
          </BoothIconContainer>
          <CycleContainer item xs={12} md={6} lg={4}>
            <a
              href="https://wheatandcat.booth.pm/items/1560279"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Cycle>
                <CycleInImage src={cover} />
                <ChackButton variant="contained">商品ページを確認</ChackButton>
              </Cycle>
            </a>
          </CycleContainer>
          <Grid item lg={2}></Grid>
        </BoothContainer>
      </Container>
    );
  }
}

const Container = styled(Grid)`
  background-color: #4caf50;
  padding: 15px;
  border: solid 3px #6fcf97;
`;

const BookContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 15px;
`;

const BookImage = styled.img`
  height: 230px;
  border: solid 1px ${props => props.theme.color.gray};
`;

const Title = styled.div`
  color: ${props => props.theme.color.white};
  font-size: 2rem;
  font-weight: 900;
  padding-bottom: 1rem;
  padding-left: 15px;
`;

const Description = styled.div`
  color: ${props => props.theme.color.white};
  font-size: 0.9rem;
  font-weight: 600;
  padding: 0 15px;
`;

const EventInfo = styled.div`
  color: ${props => props.theme.color.black};
  font-size: 0.8rem;
  font-weight: 600;
  padding: 15px;
  line-height: 1.6rem;
`;

const Place = styled.span`
  color: ${props => props.theme.color.white};
  font-size: 1.3rem;
  font-weight: 600;
  padding-left: 5px;
  line-height: 2rem;
`;

const LinkTitle = styled.div`
  padding-top: 5px;
`;

const Link = styled.div`
  line-height: 1rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const BookTitkeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 0;
`;

const Price = styled.div`
  color: ${props => props.theme.color.black};
  font-size: 0.9rem;
  font-weight: 800;
`;

const BoothContainer = styled(Grid)`
  background-color: #98d181;
  margin-top: 10px;

  position: relative;
`;

const BoothIconContainer = styled(Grid)`
  padding: 50px;
`;

const BoothIcon = styled.img`
  height: 20px;
`;

const BoothText = styled.div`
  padding: 20px 0;
  color: ${props => props.theme.color.black};
  font-size: 0.9rem;
  font-weight: 800;
`;

const CycleContainer = styled(Grid)`
  position: relative;
  height: 185px;
`;

const Cycle = styled.div`
  width: 200px;
  height: 200px;
  background-color: #f2f2f2;
  border-radius: 100px;
  position: absolute;
  top: -25px;
  right: 100px;
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

const ChackButton = styled(Button)`
  background-color: #eb5757 !important;
  color: ${props => props.theme.color.white} !important;
  font-weight: 800 !important;
  margin: 5px 0 !important;
  font-size: 12px !important;
  padding: 6px 25px !important;
  border-radius: 25px !important;
`;
