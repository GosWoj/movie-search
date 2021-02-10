import React from "react";
import { useGlobalContext } from "./context";

const Buttons = () => {
  const { loading, page, nextPage, prevPage, results } = useGlobalContext();

  return (
    <div className="btn-container">
      {page > 1 ? (
        <button onClick={prevPage} disabled={loading}>
          Prev
        </button>
      ) : (
        <button disabled>Prev</button>
      )}
      <p>
        {page} of {Math.ceil(results / 10)}
      </p>
      {page <= Math.round(results / 10) ? (
        <button onClick={nextPage} disabled={loading}>
          Next
        </button>
      ) : (
        <button disabled>Next</button>
      )}
    </div>
  );
};

export default Buttons;
