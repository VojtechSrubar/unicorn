import React, { useEffect, useState } from "react";
import "./ClipsGiphySection.css";

const ClipsGiphySection = ({ giphysArray }) => {
  const [giphys, setGiphys] = useState([]);

  const randomizeData = (data) => {
    if (Array.isArray(data)) {
      return data.sort(() => Math.random() - 0.5);
    }
    return [];
  };

  useEffect(() => {
    if (Array.isArray(giphysArray)) {
      let randomData = randomizeData(giphysArray);
      setGiphys(randomData.slice(0, 3));
    }
  }, [giphysArray]);

  return (
    <div className="clips-grid">
      {giphys && giphys.length > 0 ? (
        <>
          <div className="first-column">
            <img src={giphys?.[0]?.images.downsized.url} alt="gif" />
            <div className="text">
              <img src="./images/giphyIconDark.png" alt="icon" />
              <p>{giphys?.[0]?.title}</p>
            </div>
          </div>
          <div className="second-column">
            <img src={giphys?.[1]?.images.downsized.url} alt="gif" />
            <div className="text">
              <img src="./images/giphyIconDark.png" alt="icon" />
              <p>{giphys?.[1]?.title}</p>
            </div>
            <img src={giphys?.[2]?.images.downsized.url} alt="gif" />
            <div className="text">
              <img src="./images/giphyIconDark.png" alt="icon" />
              <p>{giphys?.[2]?.title}</p>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default ClipsGiphySection;
