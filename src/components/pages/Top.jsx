import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import iphone1 from "../../images/iphone1.png";
import googlePlayBadge from "../../images/google-play-badge.png";
import appleStore from "../../images/apple-store.svg";
import home from "../../images/intro_home.png";
import plan from "../../images/intro_plan.png";
import schedule from "../../images/intro_schedule.png";
import share from "../../images/intro_share.png";

export default class extends Component {
  render() {
    return (
      <>
        <Grid container spacing={16}>
          <Grid
            item
            sm={6}
            xs={12}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "500px",
              backgroundColor: "#28AEB2"
            }}
          >
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  color: "#000",
                  fontSize: "20px",
                  fontWeight: "600"
                }}
              >
                簡単操作で予定を作成！
              </div>
              <div
                style={{
                  color: "#fff",
                  fontSize: "60px",
                  fontWeight: "600"
                }}
              >
                ペペロミア
              </div>
            </div>
          </Grid>
          <Grid
            item
            sm={6}
            xs={12}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#28AEB2",
              height: "500px"
            }}
          >
            <img
              src={iphone1}
              height="400"
              alt="iphone"
              style={{ zIndex: 2 }}
            />
          </Grid>
          <Grid
            item
            sm={3}
            xs={6}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "300px",
              padding: "50px",
              backgroundColor: "#E3D53D"
            }}
          >
            <div>
              <div style={{ fontWeight: "600", textAlign: "center" }}>
                予定を確認
              </div>
              <img src={home} height="200" alt="home" style={{ zIndex: 2 }} />
            </div>
          </Grid>
          <Grid
            item
            sm={3}
            xs={6}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "300px",
              padding: "50px",
              backgroundColor: "#ED4C5B"
            }}
          >
            <div>
              <div style={{ fontWeight: "600", textAlign: "center" }}>
                予定を整理
              </div>
              <img src={plan} height="200" alt="plan" style={{ zIndex: 2 }} />
            </div>
          </Grid>
          <Grid
            item
            sm={3}
            xs={6}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "300px",
              padding: "50px",
              backgroundColor: "#88DDC6"
            }}
          >
            <div>
              <div style={{ fontWeight: "600", textAlign: "center" }}>
                予定を編集
              </div>
              <img
                src={schedule}
                height="200"
                alt="schedule"
                style={{ zIndex: 2 }}
              />
            </div>
          </Grid>
          <Grid
            item
            sm={3}
            xs={6}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "300px",
              padding: "50px",
              backgroundColor: "#92AFD9"
            }}
          >
            <div>
              <div style={{ fontWeight: "600", textAlign: "center" }}>
                予定を共有
              </div>
              <img src={share} height="200" alt="share" style={{ zIndex: 2 }} />
            </div>
          </Grid>
          <Grid
            item
            xs={12}
            style={{
              justifyContent: "center",
              alignItems: "center",
              height: "200px",
              padding: "80px",
              backgroundColor: "#FFF",
              textAlign: "center"
            }}
          >
            <div
              style={{
                fontWeight: "600",
                fontSize: "25px",
                paddingLeft: "25px",
                textEmphasis: "filled sesame #cc00cc;"
              }}
            >
              必要な機能<span style={{ color: "red" }}>だけ</span>
              実装したアプリです。
            </div>
          </Grid>
          <Grid
            item
            xs={12}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "200px",
              padding: "50px",
              backgroundColor: "#28AEB2"
            }}
          >
            <a
              href="https://itunes.apple.com/us/app/%E3%83%9A%E3%83%9A%E3%83%AD%E3%83%9F%E3%82%A2/id1460583871?l=ja#?platform=iphone"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img src={appleStore} height="50" alt="appleStore" />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.wheatandcat.peperomia"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img src={googlePlayBadge} height="70" alt="googlePlayBadge" />
            </a>
          </Grid>
        </Grid>

        <div
          style={{
            display: "flex",
            justifyContent: "flex-end	",
            alignItems: "flex-end",
            height: "100px",
            padding: "10px",
            backgroundColor: "#232F3E"
          }}
        >
          <div style={{ color: "#fff", fontSize: "13px", padding: "1rem" }}>
            <Link to="/tos" style={{ color: "#fff", textDecoration: "none" }}>
              利用規約
            </Link>
          </div>
          <div style={{ color: "#fff", fontSize: "13px", padding: "1rem" }}>
            <Link
              to="/policy"
              style={{ color: "#fff", textDecoration: "none" }}
            >
              プライパシーポリシー
            </Link>
          </div>
        </div>
      </>
    );
  }
}
