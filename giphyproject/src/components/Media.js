import React, { useEffect, useState } from "react";
import { fetchTrendingGiphys } from "../api/giphyApi";
import "./Media.css";
import TrendingGiphy from "./TrendingGiphy";

const Media = () => {
  const [trending, setTrending] = useState([]);

  const randomizeData = (content) => {
    return content.data.sort(() => Math.random() - 0.5);
  };

  const getTrendingGiphys = async () => {
    const trending = await fetchTrendingGiphys();
    setTrending(trending.data);
  };

  useEffect(() => {
    getTrendingGiphys();
  }, []);

  return (
    <div className="media">
      <div className="row">
        <div className="row-header">
          <img src="/images/trending.svg" alt="trending" />
          <h1>Trending</h1>
        </div>
        <div className="trending-container">
          {trending?.map((trendingGiphy, index) => {
            return <TrendingGiphy key={index} giphy={trendingGiphy} />;
          })}
        </div>
      </div>
      <div className="row">
        <div className="row-header">
          <img src="/images/artists.svg" alt="trending" />
          <h1>Artists</h1>
        </div>
        <div className="artists-container">
          <p>Content</p>
        </div>
      </div>
      <div className="row">
        <div className="row-header">
          <img src="/images/clips.svg" alt="trending" />
          <h1>Clips</h1>
        </div>
        <div className="clips-container">
          <p>Content</p>
        </div>
      </div>
      <div className="row">
        <div className="row-header">
          <img src="/images/stories.svg" alt="trending" />
          <h1>Stories</h1>
        </div>
        <div className="stories-container">
          <p>Content</p>
        </div>
      </div>
    </div>
  );
};

export default Media;
