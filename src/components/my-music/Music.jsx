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
        <div className="song-container">
          <iframe
            width="400px"
            height="120px"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1265443129&color=%2361ef89&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
          ></iframe>
          <div className="song-info">
            <a
              href="https://soundcloud.com/user-434665739"
              title="Phoebe Tazer"
              target="_blank"
              rel="noopener noreferrer"
            >
              Phoebe Tazer
            </a>{" "}
            ·{" "}
            <a
              href="https://soundcloud.com/user-434665739/snowy-sirens-final-part-4-miranda-christina"
              title="Snowy Sirens"
              target="_blank"
              rel="noopener noreferrer"
            >
              Snowy Sirens
            </a>
          </div>
          <iframe
            width="400px"
            height="120px"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/995426839&color=%2361ef89&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
          ></iframe>
          <div className="song-info">
            <a
              href="https://soundcloud.com/user-434665739"
              title="Phoebe Tazer"
              target="_blank"
              rel="noopener noreferrer"
            >
              Phoebe Tazer
            </a>{" "}
            ·{" "}
            <a
              href="https://soundcloud.com/user-434665739/fuzz"
              title="Fuzz"
              target="_blank"
              rel="noopener noreferrer"
            >
              Fuzz
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Music;
