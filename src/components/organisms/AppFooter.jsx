import React from 'react';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';

export default () => {
  return (
    <FooterContainer>
      <ProductName>Peperomia</ProductName>
      <Grid container>
        <Grid item xs={12} md={6} lg={3}>
          <FooterTitle>Download</FooterTitle>

          <FooterLink>
            <a
              href="https://itunes.apple.com/us/app/%E3%83%9A%E3%83%9A%E3%83%AD%E3%83%9F%E3%82%A2/id1460583871?l=ja#?platform=iphone"
              rel="noopener noreferrer"
              target="_blank"
            >
              Apple Store
            </a>
          </FooterLink>

          <FooterLink>
            <a
              href="https://play.google.com/store/apps/details?id=com.wheatandcat.peperomia"
              rel="noopener noreferrer"
              target="_blank"
            >
              Google Play
            </a>
          </FooterLink>
          <br />
          <FooterTitle>Service</FooterTitle>

          <FooterLink>
            <a
              href="https://app.peperomia.info"
              rel="noopener noreferrer"
              target="_blank"
            >
              Web版 ペペロミア
            </a>
          </FooterLink>

          <FooterLink>
            <a
              href="https://amazing-hawking-a280c3.netlify.app/"
              rel="noopener noreferrer"
              target="_blank"
            >
              ヘルプ
            </a>
          </FooterLink>
        </Grid>

        <Grid item xs={12} md={6} lg={3}>
          <FooterTitle>Development</FooterTitle>

          <FooterLink>
            <a
              href="https://github.com/wheatandcat/Peperomia"
              rel="noopener noreferrer"
              target="_blank"
            >
              GitHub
            </a>
            <ul>
              <li>
                <Link
                  href="https://github.com/wheatandcat/Peperomia"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Peperomia
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/wheatandcat/PeperomiaBackend"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  PeperomiaBackend
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/wheatandcat/PeperomiaWeb"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  PeperomiaWeb
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/wheatandcat/PeperomiaHelp"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  PeperomiaHelp
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/wheatandcat/PeperomiaWebSite"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  PeperomiaWebSite
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/wheatandcat/PeperomiaTool"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  PeperomiaTool
                </Link>
              </li>
            </ul>
          </FooterLink>

          <FooterLink>
            <a
              href="https://www.figma.com/file/YYon1ahSQ7W15Mug0LsovHws/%E3%83%9A%E3%83%9A%E3%83%AD%E3%83%9F%E3%82%A2?node-id=352%3A3"
              rel="noopener noreferrer"
              target="_blank"
            >
              Figma
            </a>
          </FooterLink>

          <FooterLink>
            <a
              href="https://expo.io/@wheatandcat/peperomia"
              rel="noopener noreferrer"
              target="_blank"
            >
              Expo
            </a>
          </FooterLink>

          <FooterLink>
            <a
              href="https://app.swaggerhub.com/apis-docs/wheatandcat/peperomia/1.0.0"
              rel="noopener noreferrer"
              target="_blank"
            >
              SwaggerHub
            </a>
          </FooterLink>
          <br />
        </Grid>

        <Grid item xs={6} md={6} lg={3}>
          <FooterTitle>Documents</FooterTitle>

          <FooterLink>
            <a
              href="https://www.wheatandcat.me"
              rel="noopener noreferrer"
              target="_blank"
            >
              Blog
            </a>
          </FooterLink>
          <br />
        </Grid>

        <Grid item xs={12} md={6} lg={3}>
          <FooterTitle>Rules</FooterTitle>

          <FooterLink>
            <a
              href="https://peperomia.app/tos"
              rel="noopener noreferrer"
              target="_blank"
            >
              利用規約
            </a>
          </FooterLink>

          <FooterLink>
            <a
              href="https://peperomia.app/policy"
              rel="noopener noreferrer"
              target="_blank"
            >
              プライパシーポリシー
            </a>
          </FooterLink>
          <br />
        </Grid>
      </Grid>
    </FooterContainer>
  );
};

const ProductName = styled.div`
  color: '#000';
  padding-left: 15px;
  font-size: 1.5rem;
  font-weight: 300;
  padding-top: 0.7rem;
  padding-bottom: 2.5rem;
`;

const FooterContainer = styled.div`
  padding-bottom: 150px;
  width: 100%;
  background-color: ${(props) => props.theme.color.white};
`;

const FooterTitle = styled.div`
  padding-left: 15px;
  color: ${(props) => props.theme.color.darkGray};
  font-size: 0.9rem;
  font-weight: 700;
  padding-bottom: 1rem;
`;

const FooterLink = styled.div`
  color: '#000';
  font-size: 0.7rem;
  font-weight: 500;
  padding: 0.4rem 0;

  > a {
    padding-left: 15px;
    text-decoration: none;
    color: '#000';
  }

  > a:link {
    color: '#000';
  }

  > a:visited {
    color: ${(props) => props.theme.color.darkGray};
  }
`;

const Link = styled.a`
  text-decoration: none;
  color: '#000';

  :link {
    color: '#000';
  }

  :visited {
    color: ${(props) => props.theme.color.darkGray};
  }
`;
