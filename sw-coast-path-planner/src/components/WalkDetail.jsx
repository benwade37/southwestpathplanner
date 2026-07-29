import { Link, useParams } from "react-router";

function WalkDetail({ walks }) {
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

  return (
    <main className="walk-detail">
      <Link to="/" className="back-link">
        ← Back to all walks
      </Link>

      <h1>{walk.name}</h1>

      <p>
        <strong>Distance:</strong> {walk.distance}
      </p>

      <p>
        <strong>Difficulty:</strong> {walk.difficulty}
      </p>

      <p>
        <strong>Estimated time:</strong> {walk.time}
      </p>

      <p>
        <strong>Status:</strong>{" "}
        {walk.status === "completed"
          ? "✅ Completed"
          : walk.status === "in-progress"
            ? "🥾 In Progress"
            : "⭕ To Do"}
      </p>
    </main>
  );
}

export default WalkDetail;