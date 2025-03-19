import React, { useState } from 'react';

const SearchBar: React.FC = () => {
  const [search, setSearch] = useState('');

  const handleSearch = () => {
    alert(`Searching for: ${search}`);
  };

  return (
    <div className="d-flex">
      <input
        type="text"
        className="form-control"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button className="btn btn-dark ms-2" onClick={handleSearch}>🔍</button>
    </div>
  );
};

export default SearchBar;
