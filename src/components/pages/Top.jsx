import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import styled from "styled-components";
import CircularProgress from "@material-ui/core/CircularProgress";
import Fab from "@material-ui/core/Fab";
import Iframe from "react-iframe";
import PhoneIphone from "@material-ui/icons/PhoneIphone";
import Snackbar from "@material-ui/core/Snackbar";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import { styled as materialStyled } from "@material-ui/core/styles";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import { isMobile } from "mobile-device-detect";
import iphoneScreen from "../../images/iphone_screen.png";
import googlePlayBadge from "../../images/google-play-badge.png";
import appleStore from "../../images/apple-store.svg";
import edit from "../../images/edit.png";
import calendar from "../../images/calendar.png";
import share from "../../images/share.png";
import code from "../../images/code.png";
import icon from "../../images/icon@2x.png";
import screen01 from "../../images/screen01.png";
import screen02 from "../../images/screen02.png";
import screen03 from "../../images/screen03.png";
import screen04 from "../../images/screen04.png";
import screen05Background from "../../images/screen05_background.png";
import screen051 from "../../images/screen05_1.png";
import screen052 from "../../images/screen05_2.png";
import grayIcon from "../../images/gray_icon.png";
import github from "../../images/github.png";
import theme from "../../theme";

export default class extends Component {
  state = {
    prototype: false,
    loading: false,
    success: false,
    snackbar: false
  };

  handleButtonClick = () => {
    if (!this.state.loading) {
      this.setState({
        loading: true,
        success: false
      });
      setTimeout(() => {
        this.setState({
          loading: false,
          success: true,
          prototype: true,
          snackbar: true
        });
        setTimeout(() => {
          this.setState({
            snackbar: false
          });
        }, 4000);
      }, 2000);
    }
  };

  render() {
    return (
      <>
        <>
          <Snackbar
            anchorOrigin={{
              vertical: "top",
              horizontal: "right"
            }}
            open={this.state.snackbar}
            autoHideDuration={6000}
          >
            <MySnackbarContent
              message={
                <PreviewStartText id="client-snackbar">
                  <CheckCircleIcon
                    style={{
                      paddingRight: 10
                    }}
                  />
                  プレビューモードがONになりました
                </PreviewStartText>
              }
            />
          </Snackbar>
        </>
        <Grid container>
          <TopImageContainer item sm={6} xs={12}>
            <CenterContainer>
              <img src={icon} height="200" alt="icon" />
            </CenterContainer>

            <Title>ペペロミア</Title>
            <SubTitle>簡単操作で予定を作成できる！</SubTitle>
            <CenterContainer>
              <a
                href="https://itunes.apple.com/us/app/%E3%83%9A%E3%83%9A%E3%83%AD%E3%83%9F%E3%82%A2/id1460583871?l=ja#?platform=iphone"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img src={appleStore} height="50" alt="apple store" />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.wheatandcat.peperomia"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img
                  src={googlePlayBadge}
                  height="75"
                  alt="google play store"
                />
              </a>
            </CenterContainer>
          </TopImageContainer>
          <ProtoContainer item sm={6} xs={12}>
            <div
              style={{
                position: "absolute",
                paddingBottom: 390,
                paddingRight: 190
              }}
            >
              {!isMobile && !this.state.success && (
                <Fab
                  aria-label="save"
                  color="secondary"
                  onClick={this.handleButtonClick}
                >
                  <PhoneIphone />
                </Fab>
              )}
              {this.state.loading && (
                <CircularProgress
                  color="primary"
                  size={68}
                  style={{
                    position: "absolute",
                    top: -6,
                    left: -6,
                    zIndex: 1
                  }}
                />
              )}
            </div>
            {this.state.prototype ? (
              <Iframe
                url="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FYYon1ahSQ7W15Mug0LsovHws%2F%25E3%2583%259A%25E3%2583%259A%25E3%2583%25AD%25E3%2583%259F%25E3%2582%25A2%3Fnode-id%3D28%253A41%26viewport%3D-2163%252C-91%252C0.6853333115577698%26scaling%3Dscale-down"
                width="100%"
                height="100%"
                position="relative"
              />
            ) : (
              <img src={iphoneScreen} height="425" alt="apple store" />
            )}
          </ProtoContainer>
          <Description1Container item lg={3} md={6} xs={12}>
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
          </Description1Container>
          <Description2Container item lg={3} md={6} xs={12}>
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
          </Description2Container>
          <Description3Container item lg={3} md={6} xs={12}>
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
          </Description3Container>
          <Description4Container item lg={3} md={6} xs={12}>
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
          </Description4Container>

          <div
            style={{
              width: "100%",
              backgroundImage: `url(${screen05Background})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover"
            }}
          >
            <Grid container>
              <Description5TextContainer item xs={12} md={12} lg={6}>
                <Description5Text>
                  予定の名前に合わせて
                  <br />
                  自動でアイコンを設定！
                  <br />
                  少ない入力で、見やすい予定を作れます
                </Description5Text>
              </Description5TextContainer>

              <Description5ImageContainer item xs={12} md={12} lg={6}>
                <Screen51 src={screen051} alt="screen051" />
                <Screen52 src={screen052} alt="screen052" />
              </Description5ImageContainer>
            </Grid>
          </div>

          <Description6Container>
            <Grid
              container
              alignItems="center"
              style={{
                width: "100%",
                height: "100%"
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
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <GitHubIcon src={github} alt="github" />
                </div>
              </Grid>
            </Grid>
          </Description6Container>

          <Description7Container>
            <Grid
              container
              alignItems="center"
              style={{
                width: "100%",
                height: "100%"
              }}
            >
              <Grid item xs={12} md={6}>
                <CodeIcon src={code} alt="code" />
              </Grid>
              <Grid item xs={12} md={6}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end"
                  }}
                >
                  <Description7Text>開発者ブログ</Description7Text>
                </div>
                <br />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end"
                  }}
                >
                  <BlogLink
                    href="https://wheatandcat.hatenablog.com"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    https://wheatandcat.hatenablog.com
                  </BlogLink>
                </div>
              </Grid>
            </Grid>
          </Description7Container>
        </Grid>

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
                  href="https://wheatandcat.hatenablog.com"
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
      </>
    );
  }
}

const TopImageContainer = styled(Grid)`
  background-color: ${props => props.theme.color.main};
  padding-top: 2.5rem;
  height: 30rem;
`;

const CenterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  font-weight: 600;
  color: ${props => props.theme.color.highLightGray};
`;

const SubTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.25rem;
  font-weight: 500;
  color: ${props => props.theme.color.highLightGray};
`;

const ProtoContainer = styled(Grid)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.color.main};
  height: 30rem;
`;

const MySnackbarContent = materialStyled(SnackbarContent)({
  backgroundColor: theme.color.lightGreen
});

const PreviewStartText = styled.span`
  color: ${props => props.theme.color.main};
  display: flex;
  align-items: center;
  font-weight: 600;
`;

const Description1Container = styled(Grid)`
  height: 400px;
  position: relative;
  background-color: ${props => props.theme.color.lightYellow};
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
  color: ${props => props.theme.color.darkGray};
  padding-left: 10px;
`;

const Description2Container = styled(Grid)`
  height: 400px;
  position: relative;
  background-color: ${props => props.theme.color.lightRed};
  overflow: hidden;
`;

const Screen2 = styled.img`
  height: 500px;
  top: 80px;
  position: absolute;
`;

const Description3Container = styled(Grid)`
  height: 400px;
  background-color: ${props => props.theme.color.beige};
  display: block;
  justify-content: "center";
  align-items: "center";
`;

const Screen3 = styled.img`
  height: 300px;
  top: 80px;
`;

const Description4Container = styled(Grid)`
  height: 400px;
  background-color: ${props => props.theme.color.lightGreen};
  display: block;
  justify-content: "center";
  align-items: "center";
`;

const Description5TextContainer = styled(Grid)`
  height: 430px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Description5Text = styled(Grid)`
  color: ${props => props.theme.color.highLightGray};
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

const Description6Container = styled.div`
  background-color: ${props => props.theme.color.highLightGray};
  width: 100%;
  height: 11rem;
  padding: 0 1.5rem;
  border-top: inset 2px ${props => props.theme.color.darkGray};
`;

const Description6Text = styled.div`
  color: ${props => props.theme.color.darkGray};
  font-size: 0.9rem;
  font-weight: 600;
`;

const GitHubLink = styled.a`
  color: ${props => props.theme.color.main};
  font-size: 0.9rem;
  font-weight: 600;
`;

const GitHubIcon = styled.img`
  padding-right: 1rem;
  height: 4rem;
  opacity: 0.5;
`;

const Description7Container = styled.div`
  background-color: ${props => props.theme.color.darkGray};
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
  color: ${props => props.theme.color.highLightGray};
  font-size: 0.9rem;
  font-weight: 600;
`;

const BlogLink = styled.a`
  color: ${props => props.theme.color.lightGreen};
  font-size: 0.9rem;
  font-weight: 600;
`;

const ProductName = styled.div`
  color: "#000";
  padding-left: 15px;
  font-size: 1.5rem;
  font-weight: 300;
  padding-top: 0.7rem;
  padding-bottom: 2.5rem;
`;

const FooterContainer = styled.div`
  padding-bottom: 150px;
  width: 100%;
  background-color: ${props => props.theme.color.white};
`;

const FooterTitle = styled.div`
  padding-left: 15px;
  color: ${props => props.theme.color.darkGray};
  font-size: 0.9rem;
  font-weight: 700;
  padding-bottom: 1rem;
`;

const FooterLink = styled.div`
  color: "#000";
  font-size: 0.7rem;
  font-weight: 500;
  padding: 0.4rem 0;

  a {
    padding-left: 15px;
    text-decoration: none;
    color: "#000";
  }

  a:link {
    color: "#000";
  }

  a:visited {
    color: ${props => props.theme.color.darkGray};
  }
`;
