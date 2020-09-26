import React from "react";
import "./Header.css";
import HomeIcon from "@material-ui/icons/Home";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import LiveTvIcon from "@material-ui/icons/LiveTv";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import SearchIcon from "@material-ui/icons/Search";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";

function Header() {
  return (
    <div className="header">
      <div className="header_icns">
        <div className="header_icn header_icn--active">
          <HomeIcon />
          <p>Home</p>
        </div>
        <div className="header_icn">
          <FlashOnIcon />
          <p>Trending</p>
        </div>
        <div className="header_icn">
          <LiveTvIcon />
          <p>Verified</p>
        </div>
        <div className="header_icn">
          <VideoLibraryIcon />
          <p>Collections</p>
        </div>
        <div className="header_icn">
          <SearchIcon />
          <p>Search</p>
        </div>
        <div className="header_icn">
          <PersonOutlineIcon />
          <p>Account</p>
        </div>
      </div>
      <img
        src="https://press.hulu.com/wp-content/uploads/2020/02/hulu-white.png "
        alt=" "
      />
    </div>
  );
}

export default Header;
