import React from "react";

function Field({ text, className, setField }) {
  return (
    <div className="">
      <button
        className="bg-white w-32 py-2 rounded-md text-center font-semibold"
        onClick={() => setField(text)}
      >
        {text}{" "}
        <span className={`ml-2 font-extrabold text-lg ${className}`}>+</span>
      </button>
    </div>
  );
}

export default Field;
