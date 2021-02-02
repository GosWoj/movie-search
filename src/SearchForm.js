import React from "react";
import { useGlobalContext } from "./context";

const SearchForm = () => {
  const { query, setQuery, error } = useGlobalContext();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <h2>Movies Search</h2>
      <input
        type="text"
        className="form-input"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {error.show && <div className="error">{error.message}</div>}
    </form>
  );
};

export default SearchForm;
