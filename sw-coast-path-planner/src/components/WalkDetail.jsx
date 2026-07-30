import { Link, useParams } from "react-router";

function WalkDetail({ walks, direction }) {
  const { id } = useParams();

  const walk = walks.find((walk) => walk.id === Number(id));

  if (!walk) {
    return (
      <main className="walk-detail">
        <h1>Walk not found</h1>

        <Link to="/">← Back to all walks</Link>
      </main>
    );
  }

  const walkTitle =
    direction === "anticlockwise"
      ? `${walk.start} → ${walk.end}`
      : `${walk.end} → ${walk.start}`;

return (
  <main className="walk-detail">
    <Link to="/" className="back-link">
      ← Back to all walks
    </Link>

    <h1>{walkTitle}</h1>

    <div className="walk-stats">
      <div className="walk-stat">
        <span className="walk-stat-icon">🥾</span>
        <span className="walk-stat-label">Distance</span>
        <strong>{walk.distance}</strong>
      </div>

      <div className="walk-stat">
        <span className="walk-stat-icon">⛰️</span>
        <span className="walk-stat-label">Difficulty</span>
        <strong>{walk.difficulty}</strong>
      </div>

      <div className="walk-stat">
        <span className="walk-stat-icon">🕒</span>
        <span className="walk-stat-label">Estimated time</span>
        <strong>{walk.time}</strong>
      </div>

      <div className="walk-stat">
        <span className="walk-stat-icon">📍</span>
        <span className="walk-stat-label">Status</span>
        <strong>
          {walk.status === "completed"
            ? "Completed"
            : walk.status === "in-progress"
              ? "In Progress"
              : "To Do"}
        </strong>
      </div>
    </div>
  </main>
);
}

export default WalkDetail;