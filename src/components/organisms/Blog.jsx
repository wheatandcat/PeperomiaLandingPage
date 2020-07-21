import React from 'react';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';
import code from '../../images/code.png';

export default () => {
  return (
    <Grid container>
      <Description7Container>
        <Grid
          container
          alignItems="center"
          style={{
            width: '100%',
            height: '100%',
          }}
        >
          <Grid item xs={12} md={6}>
            <CodeIcon src={code} alt="code" />
          </Grid>
          <Grid item xs={12} md={6}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'flex-end',
              }}
            >
              <Description7Text>開発者ブログ</Description7Text>
            </div>
            <br />
            <div
              style={{
                display: 'flex',
                justifyContent: 'flex-end',
              }}
            >
              <BlogLink
                href="https://www.wheatandcat.me"
                rel="noreferrer noopener"
                target="_blank"
              >
                https://www.wheatandcat.me
              </BlogLink>
            </div>
          </Grid>
        </Grid>
      </Description7Container>
    </Grid>
  );
};

const Description7Container = styled.div`
  background-color: ${(props) => props.theme.color.darkGray};
  width: 100%;
  height: 11rem;
  padding: 0 1.5rem;
`;

const CodeIcon = styled.img`
  padding-left: 1rem;
  height: 2.5rem;
`;

const Description7Text = styled.div`
  display: flex;
  justify-content: flex-end;
  color: ${(props) => props.theme.color.highLightGray};
  font-size: 0.9rem;
  font-weight: 600;
`;

const BlogLink = styled.a`
  color: ${(props) => props.theme.color.lightGreen};
  font-size: 0.9rem;
  font-weight: 600;
`;
