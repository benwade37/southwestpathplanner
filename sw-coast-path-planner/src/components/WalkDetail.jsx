import { Link, useParams } from "react-router";

function WalkDetail({ walks, direction }) {
  const { id } = useParams();

  const walk = walks.find(
    (walk) => walk.id === Number(id)
  );

  if (!walk) {
    return (
      <main className="walk-detail">
        <section className="walk-not-found">
          <div className="walk-not-found-badge">
            <span className="walk-not-found-icon">🥾</span>
          </div>

          <h1>Walk not found</h1>

          <p>
            Looks like this stretch has wandered off.
          </p>

          <Link to="/" className="back-to-walks">
            <span className="back-arrow">←</span>
            Back to all walks
          </Link>
        </section>
      </main>
    );
  }

  const walkTitle =
    direction === "anticlockwise"
      ? `${walk.start} → ${walk.end}`
      : `${walk.end} → ${walk.start}`;

  const statusText =
    walk.status === "completed"
      ? "Completed"
      : walk.status === "in-progress"
        ? "In Progress"
        : "To Do";

  return (
    <main className="walk-detail">
      <Link to="/" className="back-to-walks">
        <span className="back-arrow">←</span>
        Back to all walks
      </Link>

      {walk.image && (
        <img
          src={walk.image}
          alt={`Illustration of ${walkTitle}`}
          className="walk-hero"
        />
      )}

      <header className="walk-detail-header">
        <p className="walk-location">
          {walk.location}
        </p>

        <h1>{walkTitle}</h1>

        <p className="walk-description">
          {walk.description}
        </p>
      </header>

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
          <span className="walk-stat-label">Estimated Time</span>
          <strong>{walk.time}</strong>
        </div>

        <div className="walk-stat">
          <span className="walk-stat-icon">📍</span>
          <span className="walk-stat-label">Status</span>
          <strong>{statusText}</strong>
        </div>
      </div>

      {walk.highlights?.length > 0 && (
        <section className="walk-highlights-section">
          <h2>Highlights</h2>

          <ul className="walk-highlights">
            {walk.highlights.map((highlight) => (
              <li key={highlight}>
                {highlight}
              </li>
            ))}
          </ul>
        </section>
      )}
    </main>
  );
}

export default WalkDetail;