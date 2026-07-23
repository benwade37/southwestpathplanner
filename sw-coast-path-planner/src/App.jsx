import "./App.css";
import { useState } from "react";
import WalkCard from "./components/WalkCard";
import ProgressCard from "./components/ProgressCard";
import useWalks from "./hooks/useWalks";

function App() {
  const { walks, handleComplete, handleFavorite } = useWalks();
  const [filter, setFilter] = useState("all");

  const completedWalks = walks.filter((walk) => walk.completed);
  const completedCount = completedWalks.length;

  const progressPercentage = Math.round(
    (completedCount / walks.length) * 100
  );

  const filteredWalks = walks.filter((walk) => {
    if (filter === "completed") {
      return walk.completed;
    }

    if (filter === "todo") {
      return !walk.completed;
    }

    return true;
  });

  return (
    <div>
      <h1 className="app-title">SW Coast Path Planner</h1>

      <p className="app-intro">Track your progress along the path.</p>

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
          className={filter === "completed" ? "active" : ""}
          onClick={() => setFilter("completed")}
        >
          Completed
        </button>

        <button
          className={filter === "todo" ? "active" : ""}
          onClick={() => setFilter("todo")}
        >
          To Do
        </button>
      </div>

      <div className="walk-list">
        {filteredWalks.map((walk) => (
          <WalkCard
            key={walk.id}
            walk={walk}
            onComplete={handleComplete}
            onFavorite={handleFavorite}
          />
        ))}
      </div>
    </div>
  );
}

export default App;