import React from 'react';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';
import github from '../../images/github.png';

export default () => {
  return (
    <Grid container>
      <Description6Container>
        <Grid
          container
          alignItems="center"
          style={{
            width: '100%',
            height: '100%',
          }}
        >
          <Grid item xs={12} md={6}>
            <Description6Text>
              ペペロミアはdeveloper向けにオープンソースとして公開しています。
            </Description6Text>

            <br />
            <GitHubLink
              href="https://github.com/wheatandcat/Peperomia"
              rel="noreferrer noopener"
              target="_blank"
            >
              https://github.com/wheatandcat/Peperomia
            </GitHubLink>
          </Grid>
          <Grid item xs={12} md={6}>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <GitHubIcon src={github} alt="github" />
            </div>
          </Grid>
        </Grid>
      </Description6Container>
    </Grid>
  );
};

const Description6Container = styled.div`
  background-color: ${(props) => props.theme.color.highLightGray};
  width: 100%;
  height: 11rem;
  padding: 0 1.5rem;
  border-top: inset 2px ${(props) => props.theme.color.darkGray};
`;

const Description6Text = styled.div`
  color: ${(props) => props.theme.color.darkGray};
  font-size: 0.9rem;
  font-weight: 600;
`;

const GitHubLink = styled.a`
  color: ${(props) => props.theme.color.main};
  font-size: 0.9rem;
  font-weight: 600;
`;

const GitHubIcon = styled.img`
  padding-right: 1rem;
  height: 4rem;
  opacity: 0.5;
`;
