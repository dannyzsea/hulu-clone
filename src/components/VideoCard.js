import React from "react";
import "./VideoCard.css";
function VideoCard({ movie }) {
  return (
    <div className="videoCard">
      <img src="https://static.toiimg.com/photo/72243079.jpeg" alt="" />
      <p>This is a movie about an Orphan</p>
      <h2>Movie Title</h2>
      <p>Number of Likes!</p>
    </div>
  );
}

export default VideoCard;
