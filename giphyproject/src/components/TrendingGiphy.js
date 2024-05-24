import React from "react";
import "./TrendingGiphy.css";

const TrendingGiphy = ({ giphy }) => {
  return (
    <div>
      <img src={giphy.images.downsized.url} alt={giphy.title} />
    </div>
  );
};

export default TrendingGiphy;
