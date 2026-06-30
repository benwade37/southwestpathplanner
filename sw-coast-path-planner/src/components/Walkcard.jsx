function WalkCard({ walk }) {
  return (
    <div className="walk-card">
      <h2>{walk.name}</h2>

      <p>
        <strong>Distance:</strong> {walk.distance}
      </p>

      <p>
        <strong>Difficulty:</strong> {walk.difficulty}
      </p>

      <p>
      <strong>Estimated Time:</strong> {walk.time}
      </p>
    </div>
  );
}

export default WalkCard;