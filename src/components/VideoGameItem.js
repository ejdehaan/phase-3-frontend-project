import ReactPlayer from "react-player"

function VideoGameItem({onDeleteGame, id, fave_character, game_trailer, genre, name, poster_link, esrb_rating, personal_ratin,}) {


  const handleDelete= () => {
    fetch(`http://localhost:9292/video_games/${id}`, {
      method: "DELETE",
    });
    onDeleteGame(id)
  }

  return (
    <div>
        <div>
            <h2>{name}</h2>
            <h4>Genre: {genre}</h4>
            <h4>Favorite Character: {fave_character}</h4>
            <button onClick={handleDelete}>Delete Game</button>
            <br></br>
            <br></br>
            <ReactPlayer url={game_trailer}/>

            {/* <img src={game.poster_link}></img> */}
        </div>
    </div>
  )
}

export default VideoGameItem