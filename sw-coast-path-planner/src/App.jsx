import "./App.css";
import { useState } from "react";
import WalkCard from "./components/WalkCard";
import ProgressCard from "./components/ProgressCard";
import useWalks from "./hooks/useWalks";

function App() {
  const { walks, handleStatusChange, handleFavorite } = useWalks();
  const [filter, setFilter] = useState("all");

  const completedWalks = walks.filter(
    (walk) => walk.status === "completed"
  );

  const completedCount = completedWalks.length;

  const progressPercentage =
    walks.length > 0
      ? Math.round((completedCount / walks.length) * 100)
      : 0;

  const filteredWalks = walks.filter((walk) => {
    if (filter === "completed") {
      return walk.status === "completed";
    }

    if (filter === "todo") {
      return walk.status === "todo";
    }

    if (filter === "in-progress") {
      return walk.status === "in-progress";
    }

    if (filter === "favorites") {
      return walk.favorite;
    }

    return true;
  });

  return (
    <div>
      <h1 className="app-title">SWCP Shlep Smasher</h1>

      <p className="app-intro">
        Easily track your progress along the path.
      </p>

      <ProgressCard
        completedCount={completedCount}
        totalWalks={walks.length}
        progressPercentage={progressPercentage}
      />

      <div className="filter-buttons">
        <button
          className={filter === "all" ? "active" : ""}
          onClick={() => setFilter("all")}
        >
          All
        </button>

        <button
          className={filter === "todo" ? "active" : ""}
          onClick={() => setFilter("todo")}
        >
          ⭕ To Do
        </button>

        <button
          className={filter === "in-progress" ? "active" : ""}
          onClick={() => setFilter("in-progress")}
        >
          🥾 In Progress
        </button>

        <button
          className={filter === "completed" ? "active" : ""}
          onClick={() => setFilter("completed")}
        >
          ✅ Completed
        </button>

        <button
          className={filter === "favorites" ? "active" : ""}
          onClick={() => setFilter("favorites")}
        >
          ⭐ Favourites
        </button>
      </div>

      <div className="walk-list">
        {filteredWalks.length > 0 ? (
          filteredWalks.map((walk) => (
            <WalkCard
              key={walk.id}
              walk={walk}
              onStatusChange={handleStatusChange}
              onFavorite={handleFavorite}
            />
          ))
        ) : (
          <p className="empty-message">No walks found.</p>
        )}
      </div>
    </div>
  );
}

export default App;
