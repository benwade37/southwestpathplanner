function FilterButtons({ filter, setFilter }) {
  return (
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
  );
}

export default FilterButtons;