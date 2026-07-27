function WalkCard({ walk, onStatusChange, onFavorite }) {
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
        {walk.status === "completed"
          ? "✅ Completed"
          : walk.status === "in-progress"
          ? "🥾 In Progress"
          : "⭕ To Do"}
      </p>

<div className="status-buttons">
  <button
    className={walk.status === "todo" ? "active" : ""}
    onClick={() => onStatusChange(walk.id, "todo")}
  >
    ⭕ To Do
  </button>

  <button
    className={walk.status === "in-progress" ? "active" : ""}
    onClick={() => onStatusChange(walk.id, "in-progress")}
  >
    🥾 In Progress
  </button>

  <button
    className={walk.status === "completed" ? "active" : ""}
    onClick={() => onStatusChange(walk.id, "completed")}
  >
    ✅ Completed
  </button>
</div>

      <button onClick={() => onFavorite(walk.id)}>
        {walk.favorite ? "⭐ Favourite" : "☆ Add Favourite"}
      </button>
    </div>
  );
}

export default WalkCard;