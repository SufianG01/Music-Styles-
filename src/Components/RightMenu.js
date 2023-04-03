import React from "react";
import "./Styles/RightMenu.css";
import { FaBell, FaCogs, FaRegHeart, FaSun } from "react-icons/fa";
import Profile from "../img/quest-deer-iw.jpg";

function RightMenu() {
  return (
    <div className="rightMenu">
      <div className="top">
        {/* <i>
          <FaCrown />
          <p>go premium</p>
        </i> */}
        <i>
          <FaBell />
        </i>
        <i>
          <FaRegHeart />
        </i>
      </div>
      <div className="bottom">
        <i>
          <FaSun />
        </i>
        <i>
          <FaCogs />
        </i>
        <div className="profile">
          <img src={Profile} alt="" />
        </div>
      </div>
    </div>
  );
}

export { RightMenu };
