import React from 'react';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';
import screen05Background from '../../images/screen05_background.png';
import screen051 from '../../images/screen05_1.png';
import screen052 from '../../images/screen05_2.png';
import { Left, Right } from '../organisms/Animation';

export default () => {
  return (
    <Grid container>
      <div
        style={{
          width: '100%',
          backgroundImage: `url(${screen05Background})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <Grid container>
          <Description5TextContainer item xs={12} md={12} lg={6}>
            <Left>
              <Description5Text>
                予定の名前に合わせて
                <br />
                自動でアイコンを設定！
                <br />
                少ない入力で、見やすい予定を作れます
              </Description5Text>
            </Left>
          </Description5TextContainer>

          <Description5ImageContainer item xs={12} md={12} lg={6}>
            <Right>
              <Screen51 src={screen051} alt="screen051" />
              <Screen52 src={screen052} alt="screen052" />
            </Right>
          </Description5ImageContainer>
        </Grid>
      </div>
    </Grid>
  );
};

const Description5TextContainer = styled(Grid)`
  height: 430px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Description5Text = styled(Grid)`
  color: ${(props) => props.theme.color.highLightGray};
  font-weight: 600;
  font-size: 18px;
`;

const Description5ImageContainer = styled(Grid)`
  height: 430px;
  position: relative;
  overflow: hidden;
`;

const Screen51 = styled.img`
  height: 500px;
  top: 80px;
  left: 400px;
  position: absolute;
`;

const Screen52 = styled.img`
  height: 500px;
  top: 80px;
  left: 100px;
  position: absolute;
`;
