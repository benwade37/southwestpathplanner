function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="search-container">
      <label htmlFor="walk-search" className="search-label">
        Search walks
      </label>

      <input
        id="walk-search"
        type="search"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
        placeholder="Search by place name..."
        className="search-input"
      />
    </div>
  );
}

export default SearchBar;