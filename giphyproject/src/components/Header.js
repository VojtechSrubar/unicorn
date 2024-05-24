import React from "react";
import "./Header.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function Header() {
  return (
    <div className="header">
      <img src="./images/giphyLogo.png" alt="logo" />
      <div className="menu">
        <div className="button-wrapper reakce">
          <h2>Reakce</h2>
        </div>
        <div className="button-wrapper zabava">
          <h2>Zábava</h2>
        </div>
        <div className="button-wrapper sporty">
          <h2>Sporty</h2>
        </div>
        <div className="button-wrapper stickery">
          <h2>Stickery</h2>
        </div>
        <div className="button-wrapper umelci">
          <h2>Umělci</h2>
        </div>
        <div className="button-wrapper moreverticon">
          <MoreVertIcon />
        </div>
      </div>
      <div className="button">
        <h2>Upload</h2>
      </div>
      <div className="button">
        <h2>Create</h2>
      </div>
      <div className="profile">
        <img src="./images/avatar.png" alt="avatar" />
        <h2>Vojta</h2>
        <KeyboardArrowDownIcon />
      </div>
    </div>
  );
}
