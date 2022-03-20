import React from "react";

function Favorite({ isFavorite }) {
  let classes = "hearts flex self-center justify-self-start text-red-700";
  classes += isFavorite ? "text-red-700" : "text-slate-800";
  return (
    <div className={classes}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
          clip-rule="evenodd"
        />
      </svg>
    </div>
  );
}

export default Favorite;