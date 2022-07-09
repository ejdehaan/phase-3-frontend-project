import ReactPlayer from "react-player"

function VideoGameItem({onDeleteGame, id, fave_character, game_trailer, genre, name, poster_link, esrb_rating, personal_rating,}) {


  const handleDelete= () => {
    fetch(`http://localhost:9292/video_games/${id}`, {
      method: "DELETE",
    });
    onDeleteGame(id)
  }

  return (
    <div>
        <div className="category-item">
            <h1>
              {name}
              <button className="button" onClick={handleDelete}>X</button>
            </h1>
            <img alt={`${name}Poster` }src={poster_link} className="image"/>
            <h3>Genre: {genre}</h3>
            <h3>Favorite Character: {fave_character}</h3>
            <h3>Maturity Rating: {esrb_rating}</h3>
            <h3>Personal Rating: {personal_rating}</h3>
            <br></br>
            <ReactPlayer url={game_trailer}/>
            <br></br>
            <br></br>
        </div>
    </div>
  )
}

export default VideoGameItem