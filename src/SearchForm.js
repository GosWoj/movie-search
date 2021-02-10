import React from "react";
import { useGlobalContext } from "./context";

const SearchForm = () => {
  const { query, setQuery, error, setPage } = useGlobalContext();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleInput = (e) => {
    setQuery(e.target.value);
    setPage(1);
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <h2>Movies Search</h2>
      <input
        type="text"
        className="form-input"
        value={query}
        onChange={handleInput}
      />
      {error.show && <div className="error">{error.message}</div>}
    </form>
  );
};

export default SearchForm;
