import React from "react";
import "./VideoCard.css";
const base_url = "https://image.tmdb.org/t/p/original/";
function VideoCard({ movie }) {
  return (
    <div className="videoCard">
      <img src={`${base_url}${movie.backdrop_path}`} alt="" />
      <p>This is a movie about an Orphan</p>
      <h2>Movie Title</h2>
      <p>Number of Likes!</p>
    </div>
  );
}

export default VideoCard;
