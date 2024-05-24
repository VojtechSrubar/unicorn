import React, { useEffect, useState } from "react";
import { fetchSearchedGiphys, fetchTrendingGiphys } from "../api/giphyApi";
import TrendingGiphy from "./TrendingGiphy";
import "./Media.css";
import giphyArtists from "../artist";

const Media = () => {
  const [trending, setTrending] = useState([]);
  const [artists, setArtists] = useState([]);

  const randomizeData = (content) => {
    return content.data.sort(() => Math.random() - 0.5);
  };

  const getTrendingGiphys = async () => {
    const trending = await fetchTrendingGiphys();
    setTrending(randomizeData(trending.data));
  };

  const getArtists = async () => {
    const artists = await Promise.all(
      giphyArtists.map(async (giphyArtist) => {
        return fetchSearchedGiphys(giphyArtist).then((res) => res.data.data);
      })
    );
    setArtists(artists.flat());
  };

  useEffect(() => {
    getTrendingGiphys();
    getArtists();
  });

  console.log(artists);

  return (
    <div className="media">
      <div className="row">
        <div className="row-header">
          <img src="/images/trending.svg" alt="trending" />
          <h1>Trending</h1>
        </div>
      </div>
      <div className="trending-container">
        {trending?.map((trendingGiphy, index) => {
          return <TrendingGiphy giphy={trendingGiphy} key={index} />;
        })}
      </div>
      <div className="row">
        <div className="row-header">
          <img src="/images/artists.svg" alt="artists" />
          <h1>Artists</h1>
        </div>
      </div>
      <div className="artists-container">
        <p>Content</p>
      </div>
      <div className="row">
        <div className="row-header">
          <img src="/images/clips.svg" alt="clips" />
          <h1>Clips</h1>
        </div>
      </div>
      <div className="clips-container">
        <p>Content</p>
      </div>
      <div className="row">
        <div className="row-header">
          <img src="/images/stories.svg" alt="stories" />
          <h1>Stories</h1>
        </div>
      </div>
      <div className="stories-container">
        <p>Content</p>
      </div>
    </div>
  );
};

export default Media;
