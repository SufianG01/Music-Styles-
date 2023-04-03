import React from "react";
import { BsVolumeUpFill, BsMusicNoteList } from "react-icons/bs";
import { FaDesktop } from "react-icons/fa";
import Track from "../img/track.png";

function TrackList() {
  return (
    <div className="tracklist">
      <div className="top">
        <img src={Track} alt="" />
        <p className="trackName">
          sample name <span className="trackSpan">Artist </span>
        </p>
      </div>
      <div className="bottom-left">
        <i>
          <BsVolumeUpFill />
        </i>
        <input type="range" />
        <i>
          <BsMusicNoteList />
        </i>
        <i>
          <FaDesktop />
        </i>
      </div>
    </div>
  );
}

export { TrackList };
