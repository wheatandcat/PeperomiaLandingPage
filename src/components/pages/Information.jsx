import React from 'react';
import styled from 'styled-components';
import Divider from '@material-ui/core/Divider';
import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import 'dayjs/locale/ja';
import useRss from '../../hooks/useRss';

dayjs.extend(advancedFormat);

export default () => {
  const rss = useRss();
  console.log(rss);

  return (
    <>
      <Title>リリースノート</Title>
      <Root>
        <Inner>
          {rss.map((v, index) => (
            <div key={index}>
              <LinkCard>
                <DateText>
                  {dayjs(v.pubDate._text).format('YYYY-MM-DD')}
                </DateText>
                <BlogTitle>
                  <a
                    href={v.link._text}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {v.title._text}
                  </a>
                </BlogTitle>
              </LinkCard>
              <Divider />
            </div>
          ))}
        </Inner>
      </Root>
    </>
  );
};

const Title = styled.div`
  color: ${(props) => props.theme.color.white};
  background-color: ${(props) => props.theme.color.main};
  text-align: center;
  font-size: 28px;
  font-weight: bold;
  height: 100px;
  display: flex;
  justify-content: center;
  padding-top: 3rem;
`;

const Root = styled.div`
  background-color: ${(props) => props.theme.color.white};
  width: 100%;
  height: 100%;
  padding-top: 2rem;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const Inner = styled.div`
  width: 100%;
  max-width: 700px;
`;

const LinkCard = styled.div`
  display: flex;
  padding: 1rem;

  @media screen and (max-width: 767px) {
    display: block;
  }
`;

const DateText = styled.div`
  color: ${(props) => props.theme.color.gray};
  font-size: 14px;
  padding: 0 1rem;
  padding-top: 0.4rem;

  @media screen and (max-width: 767px) {
    padding: 0;
  }
`;

const BlogTitle = styled.div`
  font-size: 18px;
  font-weight: bold;

  a {
    text-decoration: none;
    color: ${(props) => props.theme.color.main};

    :link {
      color: ${(props) => props.theme.color.main};
    }

    :visited {
      color: ${(props) => props.theme.color.gray};
    }
  }
`;
