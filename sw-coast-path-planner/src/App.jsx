import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router";

import WalkCard from "./components/WalkCard";
import ProgressCard from "./components/ProgressCard";
import FilterButtons from "./components/FilterButtons";
import SearchBar from "./components/SearchBar";
import WalkDetail from "./components/WalkDetail";

import useWalks from "./hooks/useWalks";
import ShlepLogoMain3 from "./assets/images/ShlepLogoMain3.png";

function App() {
  const { walks, handleStatusChange, handleFavorite } = useWalks();

  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const [direction, setDirection] = useState("anticlockwise");

  const completedWalks = walks.filter(
    (walk) => walk.status === "completed"
  );

  const completedCount = completedWalks.length;

  const progressPercentage =
    walks.length > 0
      ? Math.round((completedCount / walks.length) * 100)
      : 0;

  const filteredWalks = walks.filter((walk) => {
    const walkName = `${walk.start} → ${walk.end}`;

    const matchesSearch = walkName
    .toLowerCase()
    .includes(searchTerm.toLowerCase());

    const matchesFilter =
      filter === "completed"
        ? walk.status === "completed"
        : filter === "in-progress"
          ? walk.status === "in-progress"
          : filter === "todo"
            ? walk.status === "todo"
            : filter === "favorites"
              ? walk.favorite
              : true;

    return matchesSearch && matchesFilter;
  });

  const displayedWalks =
    direction === "clockwise"
    ? [...filteredWalks].reverse()
    : filteredWalks;

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div>
            <img
              src={ShlepLogoMain3}
              alt="Shlep Logo"
              className="app-logo"
            />

            <p className="app-intro">
              Track every mile of the coastpath.
              <br />
              Celebrate every step.
            </p>

            <ProgressCard
              completedCount={completedCount}
              totalWalks={walks.length}
              progressPercentage={progressPercentage}
            />

    <div className="direction-switch">
    <button
    onClick={() => setDirection("anticlockwise")}
    className={direction === "anticlockwise" ? "active" : ""}
  >
    Minehead → Poole
    </button>

    <button
    onClick={() => setDirection("clockwise")}
    className={direction === "clockwise" ? "active" : ""}
    >
    Poole → Minehead
    </button>
    </div>

            <SearchBar
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />

            <FilterButtons
              filter={filter}
              setFilter={setFilter}
            />

            <div className="walk-list">
              {displayedWalks.length > 0 ? (
                displayedWalks.map((walk) => (
                  <WalkCard
                    key={walk.id}
                    walk={walk}
                    direction={direction}
                    onStatusChange={handleStatusChange}
                    onFavorite={handleFavorite}
                  />
                ))
              ) : (
                <p className="empty-message">No walks found.</p>
              )}
            </div>
          </div>
        }
      />

      <Route
        path="/walk/:id"
        element={<WalkDetail walks={walks} direction={direction} />}
      />
    </Routes>
  );
}

export default App;