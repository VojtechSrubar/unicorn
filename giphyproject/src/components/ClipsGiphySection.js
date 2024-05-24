import React, { useEffect, useState } from "react";
import "./ClipsGiphySection.css";

const ClipsGiphySection = ({ giphysArray }) => {
  const [giphys, setGiphys] = useState([]);

  const randomizeData = (giphysArray) => {
    return giphysArray.sort(() => Math.random() - 0.5);
  };

  useEffect(() => {
    let randomData = randomizeData(giphysArray);
    setGiphys(randomData.slice(0, 3));
  }, [giphysArray]);

  return (
    <div className="clips-grid">
      {giphys && giphys.lenght ? (
        <>
          <div className="first-column"></div>
          <img src={giphys?.[0]?.images.downsized.url} />
          <div className="second-column">
            <img src={giphys?.[1]?.images.downsized.url} />
            <img src={giphys?.[2]?.images.downsized.url} />
          </div>
        </>
      ) : null}
    </div>
  );
};

export default ClipsGiphySection;
