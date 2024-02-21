import React from "react";

function Logo() {
  return (
    <svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      <title>Logo</title>
      <g>
        <g id="P" transform="translate(30.000000, 25.000000)">
          <path
            fill="currentColor"
            d="M 10 0 L 10 30 L 20 30 Q 30 30 30 20 Q 30 10 20 10 L 10 10 Z"
          />
        </g>
        <g id="N" transform="translate(50.000000, 25.000000)">
          <path
            fill="currentColor"
            d="M 10 0 L 10 30 L 20 30 Q 40 15 20 0 Z"
          />
        </g>
        <path
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M 50, 5
             L 11, 27
             L 11, 72
             L 50, 95
             L 89, 73
             L 89, 28 z"
        />
      </g>
    </svg>
  );
}

export default Logo;
