import React, {useState, useEffect } from 'react'
import VideoGameItem from './VideoGameItem';
import Consoles from './Consoles';

function VideoGames() {

  const [games, setGames] = useState([])

  const [consoles, setConsoles] = useState([])

//   const [formData, setFormData] = useState({
//     name: "",
//     poster_link: "",
//     esrb_rating: "",
//     personal_rating: "",
//     fave_character: "",
//     game_trailer: "",
//     genre: "",
//   })

//   function handleChange(e) {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({...prevData, [name]: value}))
// }

  
  function fetchVideoGames() {
    fetch("http://localhost:9292/video_games")
    .then(resp => resp.json())
    .then(game => setGames(game))
  }

  function fetchConsoles() {
    fetch("http://localhost:9292/consoles")
    .then(resp => resp.json())
    .then(consoles => setConsoles(consoles))
  }


  useEffect(() => {
    fetchVideoGames();
  }, []);

  useEffect(() => {
    fetchConsoles();
  }, []);
  
  function renderGames() {
    return games.map((game) =>
      <VideoGameItem key={game.id} {...game} game={game}/>
    )
  }

  function renderConsole() {
    return <Consoles consoles={consoles}/>
  }
  
  return (
    <div>
      <form autoComplete="off"> {/* add to form --> onSubmit={handleSubmit} */}

        <h3>Add your favorite video game!</h3>
        <label>Name  </label>
        <input 
          name="name"
          // onChange={handleChange}
          // value={FormData.name}
        />
        <br></br>

        <label>Poster  </label>
        <input 
          name="poster_link"
          // onChange={handleChange}
          // value={FormData.poster_link}
        />
        <br></br>

        <label>Maturity Rating  </label>
        <input 
          name="esrb_rating"
          // onChange={handleChange}
          // value={FormData.esrb_rating}
        />
        <br></br>

        <label>Personal Rating(1-5)  </label>
        <input 
          name="personal_rating"
          // onChange={handleChange}
          // value={FormData.personal_rating}
        />
        <br></br>

        <label>Fave Character  </label>
        <input 
          name=" fave_character"
          // onChange={handleChange}
          // value={FormData.fave_character}
        />
        <br></br>

        <label>Trailer  </label>
        <input 
          name="game_trailer"
          // onChange={handleChange}
          // value={FormData.game_trailer}
        />
        <br></br>

        <label>Genre  </label>
        <input 
          name="genre"
          // onChange={handleChange}
          // value={FormData.genre}
        />
        <br></br>
        <label>Console</label>
        <div>{renderConsole()}</div>
        <br></br>
        <br></br>
        <button type="submit">Add Game!</button>
      </form>
      <ul>
        {games && <div>{renderGames()}</div>}
      </ul>  
    </div>
  )
}

export default VideoGames