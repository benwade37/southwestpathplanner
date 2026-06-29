function App() {

  const walks = [
  {
    id: 1,
    name: "Welcombe Mouth → Hartland Quay",
    distance: "8 miles",
    difficulty: "Hard",
  },
  {
    id: 2,
    name: "Hartland Quay → Clovelly",
    distance: "10 miles",
    difficulty: "Hard",
  },
  {
    id: 3,
    name: "Portreath → St Agnes",
    distance: "12 miles",
    difficulty: "Moderate",
  },
];

  return (
    <div>
      <h1>South West Coast Path Planner</h1>

      <p>Track your progress along the South West Coast Path.</p>

      <ul>
        {walks.map((walk) => (
          <li key={walk.id}>
          <strong>{walk.name}</strong>

          <br />

        {walk.distance} • {walk.difficulty}
</li>
        ))}
      </ul>

    </div>
  );
}

export default App;