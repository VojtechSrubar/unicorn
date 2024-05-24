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

  const GiphyTitle = (giphy) => {
    <div className="title">
      <div className="giphy-title"></div>
    </div>;
  };
  return (
    <div className="stories-section">
      <div className="landscape-left-row">
        <GiphyTitle giphy={getGiphy()} />
        <GiphyTitle giphy={getGiphy()} />
        <GiphyTitle giphy={getGiphy()} />
      </div>
      <div className="landscape-right-row">
        <GiphyTitle giphy={getGiphy()} />
        <GiphyTitle giphy={getGiphy()} />
        <GiphyTitle giphy={getGiphy()} />
      </div>
      <div className="no-landscape-row">
        <GiphyTitle giphy={getGiphy()} />
        <GiphyTitle giphy={getGiphy()} />
        <GiphyTitle giphy={getGiphy()} />
        <GiphyTitle giphy={getGiphy()} />
      </div>
      <div className="landscape-middle-row">
        <GiphyTitle giphy={getGiphy()} />
        <GiphyTitle giphy={getGiphy()} />
        <GiphyTitle giphy={getGiphy()} />
      </div>
      <div className="no-landscape-row">
        <GiphyTitle giphy={getGiphy()} />
        <GiphyTitle giphy={getGiphy()} />
        <GiphyTitle giphy={getGiphy()} />
        <GiphyTitle giphy={getGiphy()} />
      </div>
    </div>
  );
};

export default StoriesGiphySection;
