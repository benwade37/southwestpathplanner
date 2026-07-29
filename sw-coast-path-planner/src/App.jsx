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

  const completedWalks = walks.filter(
    (walk) => walk.status === "completed"
  );

  const completedCount = completedWalks.length;

  const progressPercentage =
    walks.length > 0
      ? Math.round((completedCount / walks.length) * 100)
      : 0;

  const filteredWalks = walks.filter((walk) => {
    const matchesSearch = walk.name
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

            <SearchBar
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />

            <FilterButtons
              filter={filter}
              setFilter={setFilter}
            />

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
        }
      />

      <Route
        path="/walk/:id"
        element={<WalkDetail walks={walks} />}
      />
    </Routes>
  );
}

export default App;