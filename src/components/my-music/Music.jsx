import React from "react";
import "./Music.css";

const Music = () => {
  return (
    <div className="music">
      <div className="gallery">
        <iframe
          style={{
            border: "0",
            width: "400px",
            height: "360px",
          }}
          src="https://bandcamp.com/EmbeddedPlayer/album=2094421547/size=large/bgcol=333333/linkcol=2ebd35/artwork=small/transparent=true/"
          seamless
        >
          <a href="https://phoebetazer.bandcamp.com/album/7x7">
            7x7 by Phoebe Tazer
          </a>
        </iframe>
        <iframe
          style={{ border: "0", width: "400px", height: "120px" }}
          src="https://bandcamp.com/EmbeddedPlayer/track=2836734332/size=large/bgcol=333333/linkcol=2ebd35/tracklist=false/artwork=small/transparent=true/"
          seamless
        >
          <a href="https://phoebetazer.bandcamp.com/track/sweat">
            Sweat by Phoebe Tazer
          </a>
        </iframe>
      </div>
    </div>
  );
};

export default Music;
