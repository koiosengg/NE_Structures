import React from "react";

const AniInput = () => {
  return (
    <div className="input-wrapper">
      <input type="text" id="input" required></input>
      <label htmlFor="input" className="placeholder">
        Username
      </label>
    </div>
  );
};

export default AniInput;
