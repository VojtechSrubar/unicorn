import React, { useEffect, useState } from "react";
import { fetchTrendingGiphys, fetchSearchedGiphys } from "../api/giphyApi";
import "./Media.css";
import TrendingGiphy from "./TrendingGiphy";
import giphyArtists from "../artists";
import ArtistGiphy from "./ArtistGiphy.js";

const Media = () => {
  const [trending, setTrending] = useState([]);
  const [artists, setArtists] = useState([]);

  const randomizeData = (content) => {
    return content.data.sort(() => Math.random() - 0.5);
  };

  const getTrendingGiphys = async () => {
    const trending = await fetchTrendingGiphys();
    setTrending(trending.data);
  };

  const getArtists = async () => {
    const artists = await Promise.all(
      giphyArtists.map((giphyArtist) => {
        return fetchSearchedGiphys(giphyArtist).then((res) => res.data.data);
      })
    );
    setArtists(artists.flat());
  };

  useEffect(() => {
    getTrendingGiphys();
    getArtists();
  }, []);
  //{trending?.map((trendingGiphy, index) => {
  //return <TrendingGiphy key={index} giphy={trendingGiphy} />;
  //})}

  return (
    <div className="media">
      <div className="row">
        <div className="row-header">
          <img src="/images/trending.svg" alt="trending" />
          <h1>Trending</h1>
        </div>
        <div className="trending-container"></div>
      </div>
      <div className="row">
        <div className="row-header">
          <img src="/images/artists.svg" alt="trending" />
          <h1>Artists</h1>
        </div>
        <div className="artists-container">
          {artists.map((ArtistGiphys, index) => {
            return <ArtistGiphy giphy={ArtistGiphys} key={index} />;
          })}
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
