import React from "react";
import requests from "../requests";
import "./Nav.css";

function Nav({ setSelectedByUser }) {
  return (
    <div className="nav">
      <h2 onClick={() => setSelectedByUser(requests.fetchTrending)}>
        Trending
      </h2>
      <h2 onClick={() => setSelectedByUser(requests.fetchTopRated)}>
        Top Rated
      </h2>
      <h2 onClick={() => setSelectedByUser(requests.fetchActionMovies)}>
        Action
      </h2>
      <h2 onClick={() => setSelectedByUser(requests.fetchComedyMovies)}>
        Comedey
      </h2>
      <h2 onClick={() => setSelectedByUser(requests.fetchHororMovies)}>
        Horor
      </h2>
      <h2 onClick={() => setSelectedByUser(requests.fetchRomanceMovies)}>
        Romance
      </h2>
      <h2 onClick={() => setSelectedByUser(requests.fetchMysteryMovies)}>
        Mystery
      </h2>
      <h2 onClick={() => setSelectedByUser(requests.fetchSciFiMovies)}>
        Sci-Fi
      </h2>
      <h2 onClick={() => setSelectedByUser(requests.fetchWesternMovies)}>
        Werstern
      </h2>
      <h2 onClick={() => setSelectedByUser(requests.fetchSciFiMovies)}>
        Fiction
      </h2>
      <h2 onClick={() => setSelectedByUser(requests.fetchAnimationMovies)}>
        Animation
      </h2>
      <h2 onClick={() => setSelectedByUser(requests.fetchTv)}>Movie</h2>
    </div>
  );
}

export default Nav;
