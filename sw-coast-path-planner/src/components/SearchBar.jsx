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
        placeholder="Search places, scenery or highlights..."
        className="search-input"
      />
    </div>
  );
}

export default SearchBar;