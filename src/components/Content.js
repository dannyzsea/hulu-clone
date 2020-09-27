import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import axios from "../axios";
import "./Content.css";
function Content({ selectedByUser }) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(selectedByUser);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [selectedByUser]);
  return (
    <div className="content">
      {movies.map((movie) => (
        <VideoCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default Content;
