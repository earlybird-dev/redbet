import React from "react";

const Loading = () => {
  return (
    <div className="text-center my-5">
      <div
        className="spinner-border spinner-border-sm text-primary"
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;
