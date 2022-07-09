import React, {useState, useEffect } from 'react'
import VideoGameItem from './VideoGameItem';
import Consoles from './Consoles';

function VideoGames() {

  const [games, setGames] = useState([])

  const [consoles, setConsoles] = useState([])

  const [formData, setFormData] = useState({
    name: "",
    poster_link: "",
    esrb_rating: "",
    personal_rating: "",
    fave_character: "",
    game_trailer: "",
    genre: "",
    console_id:""
  })

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevData) => ({...prevData, [name]: value}))
    console.log(formData)
}

  function handleSubmit(e) {
    e.preventDefault()
    fetch("http://localhost:9292/video_games", {
      method:"POST",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData),
    })
    .then(resp => resp.json())
    .then(newGame => handleAddGame(newGame));
    setFormData({
      name: "",
      poster_link: "",
      esrb_rating: "",
      personal_rating: "",
      fave_character: "",
      game_trailer: "",
      genre: "",
      console_id: ""
    })
  }


  
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
      <VideoGameItem onDeleteGame={onDeleteGame} key={game.id} {...game} game={game}/>
    )
  }

  function renderConsole() {
    return <Consoles handleChange={handleChange} consoles={consoles}/>
  }

  function handleAddGame(newGame) {
    setGames([...games, newGame])
  }

  const onDeleteGame = (id) => {
    const updatedGames = games.filter(
      (game) => game.id !== id
    )
    setGames(updatedGames)
  }


  
  return (
    <div>
      <form className='form' autoComplete="off" onSubmit={handleSubmit}>

        <h3>Add your favorite video game!</h3>
        <label>Name  </label>
        <br></br>
        <input 
          name="name"
          onChange={handleChange}
          value={formData.name}
        />
        <br></br>

        <label>Poster  </label>
        <br></br>
        <input 
          name="poster_link"
          onChange={handleChange}
          value={formData.poster_link}
        />
        <br></br>

        <label>Maturity Rating  </label>
        <br></br>
        <input 
          name="esrb_rating"
          onChange={handleChange}
          value={formData.esrb_rating}
        />
        <br></br>

        <label>Personal Rating(1-5)  </label>
        <br></br>
        <input 
          name="personal_rating"
          onChange={handleChange}
          value={formData.personal_rating}
          //type=number /max number is 5
        />
        <br></br>

        <label>Fave Character  </label>
        <br></br>
        <input 
          name="fave_character"
          onChange={handleChange}
          value={formData.fave_character}
        />
        <br></br>

        <label>Trailer  </label>
        <br></br>
        <input 
          name="game_trailer"
          onChange={handleChange}
          value={formData.game_trailer}
        />
        <br></br>

        <label>Genre  </label>
        <br></br>
        <input 
          name="genre"
          onChange={handleChange}
          value={formData.genre}
        />
        <br></br>

        <label>Console</label>
        <div>{renderConsole()}</div>
        <br></br>
        <button type="submit">Add Game!</button>
      </form>
      <br></br>
      {/* <button className='logo'>
        <img alt="PS2 logo" src='https://seeklogo.com/images/P/playstation-2-logo-F384843875-seeklogo.com.png'></img>
      </button>
      <button>
        <img alt="PS4 logo" src='https://www.nicepng.com/png/detail/6-60543_transparent-logo-ps4-playstation-decal.png'></img>
      </button>
      <button>
        <img alt="Nintendo Switch Logo" src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a42701d4-8df7-4cb8-be72-c6717fe51a1a/dejvs5d-bcadf5fc-0f8b-4c69-9e31-0f0d72e2f3df.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2E0MjcwMWQ0LThkZjctNGNiOC1iZTcyLWM2NzE3ZmU1MWExYVwvZGVqdnM1ZC1iY2FkZjVmYy0wZjhiLTRjNjktOWUzMS0wZjBkNzJlMmYzZGYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.m7WJYciZNKl38OZp8AIqTedMhNibCuZgIY-OepqE5N0'></img>
      </button>
      <br></br> */}
      <ul>
        {games && <div>{renderGames()}</div>}
      </ul>  
    </div>
  )
}

export default VideoGames