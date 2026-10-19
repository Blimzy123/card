import Player from "./Player.jsx";
import players from "./Player.js";

function PlayersList() {
  return (
    <div className="container py-5">
      <h1 className="text-center fw-bold mb-5">⚽ FIFA Player Cards</h1>

      <div className="row g-4 justify-content-center">
        {players.map((player) => (
          <div className="col-12 col-sm-6 col-lg-3" key={player.name}>
            <Player
              name={player.name}
              team={player.team}
              nationality={player.nationality}
              jerseyNumber={player.jerseyNumber}
              age={player.age}
              image={player.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default PlayersList;