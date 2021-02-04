import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="error-page">
      <div className="error-container">
        <h1>This page doesn't exist!</h1>
        <Link to="/" className="btn">
          Back to search
        </Link>
      </div>
    </section>
  );
};

export default Error;
