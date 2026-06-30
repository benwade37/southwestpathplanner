import "./App.css";
import WalkCard from "./components/WalkCard";

function App() {
  const walks = [
    {
      id: 1,
      name: "Welcombe Mouth → Hartland Quay",
      distance: "5.5miles",
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
  ];

  return (
    <div>
      <h1 className="app-title">SW Coast Path Planner</h1>

      <p className="app-intro">Track your progress along the Path.</p>

      <div className="walk-list">
      {walks.map((walk) => (
      <WalkCard key={walk.id} walk={walk} />
    ))}
    </div>
    </div>
  );
}

export default App;