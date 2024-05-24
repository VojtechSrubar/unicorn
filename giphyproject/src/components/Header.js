import React from "react";
import "./Header.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function Header() {
  return (
    <div className="header">
      <img src="./images/giphyLogo.png" alt="logo" />
      <div className="menu">
        <div className="button-wrapper reactions">
          <div className="menu-button hover-reactions">
            <h2>Reakce</h2>
          </div>
          <div className="button-wrapper entertainment">
            <div className="menu-button hover-entertainment">
              <h2>Zábava</h2>
            </div>
          </div>
          <div className="button-wrapper sports">
            <div className="menu-button hover-sports">
              <h2>Sporty</h2>
            </div>
          </div>
          <div className="button-wrapper stickers">
            <div className="menu-button hover-stickers">
              <h2>Stickery</h2>
            </div>
          </div>
          <div className="button-wrapper artists">
            <div className="menu-button hover-artists">
              <h2>Umělci</h2>
            </div>
          </div>
          <div className="button-wrapper moreverticon">
            <div className="menu-button hover-moreverticon">
              <MoreVertIcon />
            </div>
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
    </div>
  );
}
