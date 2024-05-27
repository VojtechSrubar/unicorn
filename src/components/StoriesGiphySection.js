import React from "react";
import "./StoriesGiphySection.css";

const StoriesGiphySection = ({ giphysArray }) => {
  const getGiphy = () => {
    let randomIndex = Math.floor(Math.random() * 31) + 0;
    let randomGiphy = giphysArray[randomIndex];

    if (randomGiphy) {
      return randomGiphy;
    }
  };

  const GiphyTile = (giphy) => {
    let giphyURL = giphy ? giphy.image.downsized.url : "";

    <div className="tile">
      <div className="giphy-title">
        <div className="text-title">
          <p>{giphy?.title}</p>
        </div>
        <img src={giphyURL} />
      </div>
      <div className="line-box">
        <div className="line-top-purple"></div>¨
        <div className="line-middle-purple"></div>
        <div className="line-bottom-purple"></div>
      </div>
    </div>;
  };

  const gridGiphyConfig = [
    ["landscape-left-row", 3],
    ["landscape-right-row", 3],
    ["no-landscape-row", 4],
    ["landscape-middle-row", 3],
    ["no-landscape-row", 4],
  ];

  const createTiles = (numTiles) => {
    let tiles = [];
    for (let i = 0; i < numTiles; i++) {
      tiles.push(<GiphyTile giphy={getGiphy()} key={i} />);
    }
    return tiles;
  };

  return (
    <div className="stories-section">
      {gridGiphyConfig.map(([layoutClass, numTiles], index) => {
        const tiles = createTiles(numTiles);
        return (
          <div className={layoutClass} key={index}>
            {tiles}
          </div>
        );
      })}
    </div>
  );
};

export default StoriesGiphySection;
