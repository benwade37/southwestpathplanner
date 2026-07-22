function WalkCard({ walk, onComplete }) {
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

      <p>
        <strong>Status:</strong>{" "}
        {walk.completed ? "✅ Completed" : "⭕ To Do"}
      </p>
      <button onClick={() => onComplete(walk.id)}>
      {walk.completed ? "Mark as To Do" : "Mark Complete"}
      </button>
      </div>
  );
}

export default WalkCard;