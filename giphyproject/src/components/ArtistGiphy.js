import React from "react";
import "./ArtistGiphy.css";

const ArtistGiphy = ({ giphy }) => {
  return (
    <div className="artist-giphy">
      <img src={giphy.images.downsized.url} alt={giphy.title} />
    </div>
  );
};

export default ArtistGiphy;
