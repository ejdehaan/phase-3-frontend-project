import React, {useState, useEffect } from 'react'
import VideoGameItem from './VideoGameItem';

function VideoGames() {

  const [games, setGames] = useState([])
  
  function fetchVideoGames() {
    fetch("http://localhost:9292/video_games")
    .then(resp => resp.json())
    .then(game => setGames(game))
  }

  useEffect(() => {
    fetchVideoGames();
  }, []);
  
  function renderGames() {
    return games.map((game) =>
    <VideoGameItem key={game.id} {...game} game={game}/>)
  }

  
  return (
    <div>
      <ul>
        {games && <div>{renderGames()}</div>}
      </ul>  
    </div>
  )
}

export default VideoGames