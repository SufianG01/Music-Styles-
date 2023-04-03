import React from "react";
import { GiDeer } from "react-icons/gi";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import "./Styles/LeftMenu.css";
// import { BiSearchAlt } from "react-icons/bi";
import { Menu } from "./Menu";
import { MenuList } from "./MenuList";
import { MenuPlayList } from "./MenuPlayList";
import { TrackList } from "./TrackList";

function LeftMenu() {
  return (
    <div className="LeftMenu">
      <div className="logoContainer">
        <i>
          <GiDeer />
        </i>
        <h2>Herd</h2>
        <i>
          <BiDotsHorizontalRounded />
        </i>
      </div>
      {/* <div className="searchBox">
        <input type="text" placeholder="Search" />
        <i className="searchIcon">
          <BiSearchAlt />
        </i>
      </div> */}
      <Menu title={"Menu"} menuObject={MenuList} />

      <MenuPlayList />

      <TrackList />
    </div>
  );
}

export { LeftMenu };
