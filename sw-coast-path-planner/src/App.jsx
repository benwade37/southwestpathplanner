import "./App.css";
import { useEffect, useState } from "react";
import WalkCard from "./components/WalkCard";
import ProgressCard from "./components/ProgressCard";
import { initialWalks } from "./data/walks";

function App() {
  const [walks, setWalks] = useState(() => {

    const savedWalks = localStorage.getItem("swcp-walks");

    if (savedWalks) {
      return JSON.parse(savedWalks);
    }

    return initialWalks;
  });

  const [filter, setFilter] = useState("all");

  useEffect(() => {
    console.log("Saving walks to Local Storage:", walks);
    localStorage.setItem("swcp-walks", JSON.stringify(walks));
  }, [walks]);

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

  function handleComplete(id) {
    const updatedWalks = walks.map((walk) => {
      if (walk.id === id) {
        return {
          ...walk,
          completed: !walk.completed,
        };
      }

      return walk;
    });

    setWalks(updatedWalks);
  }

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
          />
        ))}
      </div>
    </div>
  );
}

export default App;