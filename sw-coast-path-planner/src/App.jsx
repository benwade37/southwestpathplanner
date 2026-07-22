import "./App.css";
import { useState } from "react";
import WalkCard from "./components/WalkCard";
import ProgressCard from "./components/ProgressCard";

function App() {
  const [walks, setWalks] = useState([
    {  
      id: 1,
      name: "Welcombe Mouth → Hartland Quay",
      distance: "5.5 miles",
      difficulty: "Hard",
      time: "2 hours",
      completed: false,
    },
    {
      id: 2,
      name: "Hartland Quay → Clovelly",
      distance: "10.3 miles",
      difficulty: "Hard",
      time: "3 hours",
      completed: false,
    },
    {
      id: 3,
      name: "Portreath → St Agnes",
      distance: "8.5 miles",
      difficulty: "Moderate",
      time: "2 hours",
      completed: false,
    },
    {
      id: 4,
      name: "St Agnes → Perranporth",
      distance: "3.9 miles",
      difficulty: "Moderate",
      time: "1.5 hours",
      completed: false
    },
    {
      id: 5,
      name: "Boscastle → Port Isaac",
      distance: "13.8 miles",
      difficulty: "Moderate",
      time: "4 hours",
      completed: false,
    },
    {
      id: 6,
      name: "Boscastle → Tintagel",
      distance: "7.6 miles",
      difficulty: "Moderate",
      time: "2.5 hours",
      completed: false,
    },
  ]);

const completedWalks = walks.filter((walk) => walk.completed);
const completedCount = completedWalks.length;
const [filter, setFilter] = useState("all");

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
        return { ...walk, 
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
    <WalkCard key={walk.id} walk={walk} onComplete={handleComplete} />
    ))}
    </div>
    </div>
  );
}

export default App;