import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import axios from "../axios";
import requests from "../requests";
import "./Content.css";
function Content() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchActionMovies);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, []);
  return (
    <div className="content">
      {movies.map((movie) => (
        <VideoCard movie={movie} />
      ))}
    </div>
  );
}

export default Content;
