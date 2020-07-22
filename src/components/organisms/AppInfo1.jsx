import React from 'react';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';
import edit from '../../images/edit.png';
import calendar from '../../images/calendar.png';
import share from '../../images/share.png';
import screen01 from '../../images/screen01.png';
import screen02 from '../../images/screen02.png';
import screen03 from '../../images/screen03.png';
import screen04 from '../../images/screen04.png';
import grayIcon from '../../images/gray_icon.png';
import { Right } from '../organisms/Animation';

export default () => {
  return (
    <Grid container>
      <Description1Container item lg={3} md={6} xs={12}>
        <Right>
          <div>
            <ScreenTitleContainer>
              <img
                src={grayIcon}
                height="40"
                alt="grayIcon"
                style={{ zIndex: 2 }}
              />
              <ScreenTitle>
                簡単操作で
                <br />
                予定を作成できる！
              </ScreenTitle>
            </ScreenTitleContainer>
            <Screen1 src={screen01} alt="screen01" />
          </div>
        </Right>
      </Description1Container>
      <Description2Container item lg={3} md={6} xs={12}>
        <Right>
          <div>
            <ScreenTitleContainer>
              <img
                src={calendar}
                height="40"
                alt="grayIcon"
                style={{ zIndex: 2 }}
              />
              <ScreenTitle>
                シンプルなUIで
                <br />
                実装しました
              </ScreenTitle>
            </ScreenTitleContainer>
            <div>
              <Screen2 src={screen02} alt="screen02" />
            </div>
          </div>
        </Right>
      </Description2Container>
      <Description3Container item lg={3} md={6} xs={12}>
        <Right>
          <div>
            <ScreenTitleContainer>
              <img
                src={share}
                height="40"
                alt="grayIcon"
                style={{ zIndex: 2 }}
              />
              <ScreenTitle>
                アプリの設定を
                <br />
                WEBにシェアも可能
              </ScreenTitle>
            </ScreenTitleContainer>
          </div>
          <CenterContainer>
            <Screen3 src={screen03} alt="screen03" />
          </CenterContainer>
        </Right>
      </Description3Container>
      <Description4Container item lg={3} md={6} xs={12}>
        <Right>
          <div>
            <ScreenTitleContainer>
              <img src={edit} height="35" alt="edit" style={{ zIndex: 2 }} />
              <ScreenTitle>
                詳しい予定も
                <br />
                書き込みできます
              </ScreenTitle>
            </ScreenTitleContainer>
          </div>
          <CenterContainer>
            <Screen3 src={screen04} alt="screen04" />
          </CenterContainer>
        </Right>
      </Description4Container>
    </Grid>
  );
};

const CenterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Description1Container = styled(Grid)`
  height: 400px;
  position: relative;
  background-color: ${(props) => props.theme.color.lightYellow};
  overflow: hidden;
`;

const Screen1 = styled.img`
  height: 600px;
  position: absolute;
  top: 20px;
  left: -200px;
`;

const ScreenTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const ScreenTitle = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: ${(props) => props.theme.color.darkGray};
  padding-left: 10px;
`;

const Description2Container = styled(Grid)`
  height: 400px;
  position: relative;
  background-color: ${(props) => props.theme.color.lightRed};
  overflow: hidden;
`;

const Screen2 = styled.img`
  height: 500px;
  top: 80px;
  position: absolute;
`;

const Description3Container = styled(Grid)`
  height: 400px;
  background-color: ${(props) => props.theme.color.beige};
  display: block;
  justify-content: 'center';
  align-items: 'center';
`;

const Screen3 = styled.img`
  height: 300px;
  top: 80px;
`;

const Description4Container = styled(Grid)`
  height: 400px;
  background-color: ${(props) => props.theme.color.lightGreen};
  display: block;
  justify-content: 'center';
  align-items: 'center';
`;
