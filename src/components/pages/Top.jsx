import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import iphone from "../../images/iphone.png";
import googlePlayBadge from "../../images/google-play-badge.png";
import appleStore from "../../images/apple-store.svg";

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
              height: "350px",
              backgroundColor: "#28AEB2"
              //paddingLeft: "20rem"
            }}
          >
            <div style={{ color: "#fff", fontSize: "45px", fontWeight: "600" }}>
              ペペロミア
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
              backgroundColor: "#28AEB2"
              //paddingRight: "20rem"
            }}
          >
            <img src={iphone} height="300" alt="iphone" />
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
              backgroundColor: "#fff"
            }}
          >
            <div style={{ color: "#000", fontSize: "16px", fontWeight: "600" }}>
              予定を簡単登録、共有できる！
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
            <img src={appleStore} height="50" alt="appleStore" />
            <img src={googlePlayBadge} height="70" alt="googlePlayBadge" />
          </Grid>
        </Grid>
        <div
          item
          xs={12}
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
