import ReactPlayer from "react-player"

function VideoGameItem({id, fave_character, game_trailer, genre, name, poster_link, esrb_rating, personal_ratin,}) {

    console.log(name)

  return (
    <div>
        <div>
            <h2>Game: {name}</h2>
            <h4>Genre: {genre}</h4>
            <h4>Favorite Character: {fave_character}</h4>
            <ReactPlayer url={game_trailer}/>
            {/* <img src={game.poster_link}></img> */}
        </div>
    </div>
  )
}

export default VideoGameItem