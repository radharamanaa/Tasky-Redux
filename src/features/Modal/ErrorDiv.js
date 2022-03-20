import React from "react";

function ErrorDiv({ errorText }) {
  if (errorText) {
    return (
      <div className="text-xs w-2/3 mx-auto rounded-lg text-center bg-pink-700 py-0.5 text-slate-200">
        {errorText}
      </div>
    );
  } else {
    return <div></div>;
  }
}

export default ErrorDiv;
