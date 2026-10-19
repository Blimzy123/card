function Player({
  name = "Unknown Player",
  team = "Unknown Team",
  nationality = "Unknown",
  jerseyNumber = 0,
  age = 0,
  image = "https://placehold.co/300x250?text=Player",
}) {
  return (
    <div
      className="card h-100 shadow"
      style={{
        width: "100%",
        maxWidth: "280px",
        margin: "0 auto",
        borderRadius: "15px",
        overflow: "hidden",
        backgroundColor: "white",
      }}
    >
      <img
        src={image}
        alt={name}
        className="card-img-top"
        style={{
          height: "220px",
          objectFit: "contain",
          backgroundColor: "#e8f5e9",
          padding: "10px",
        }}
      />

      <div className="card-body text-center">
        <h5 className="card-title fw-bold">{name}</h5>

        <p className="card-text">
          <strong>Team:</strong> {team}
        </p>

        <p className="card-text">
          <strong>Nationality:</strong> {nationality}
        </p>

        <p className="card-text">
          <strong>Jersey Number:</strong> {jerseyNumber}
        </p>

        <p className="card-text">
          <strong>Age:</strong> {age}
        </p>
      </div>
    </div>
  );
}

export default Player;