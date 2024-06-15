import React, { useState, useEffect } from "react";
import { BASE_API_URL, BASE_API_NSFW_URL } from "../uitls";

//jokes here
function Jokes({ isNSFW }) {
  const [currentJoke, setCurrentJoke] = useState({});
  const apiUrl = isNSFW ? BASE_API_NSFW_URL : BASE_API_URL;

  //fetch random jokes
  async function getJokeAsync() {
    try {
      const resp = await fetch(`${apiUrl}`);
      const json = await resp.json();

      setCurrentJoke(json);
    } catch (error) {
      console.error("Failed to fetch joke:", error);
    }
  }
  useEffect(() => {
    getJokeAsync(); //Fetches joke when it mounts
  }, [apiUrl]);

  //New joke on click
  function handleNewJoke() {
    getJokeAsync(); //Fetches joke when it mounts
  }

  return (
    <>
      <div>
        <p>{currentJoke.joke}</p>
        <p>{currentJoke.setup}</p>
        <p>{currentJoke.delivery}</p>
        <p>Category: {currentJoke.category}</p>
        <p>ID: {currentJoke.id}</p>
      </div>
      <button id="getJoke-btn" onClick={handleNewJoke}>
        Get new Joke
      </button>
    </>
  );
}

export default Jokes;
