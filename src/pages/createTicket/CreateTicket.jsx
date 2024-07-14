import React from "react";
import "./CreateTicket.css";
import { useNavigate } from "react-router-dom";

function CreateTicket() {
  const navigate = useNavigate();
  return (
    <div className="create-ticket">
      <button onClick={() => navigate("/")}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
        Back
      </button>
    </div>
  );
}

export default CreateTicket;
