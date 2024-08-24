import React from "react";

function Field({ text, className, setField }) {
  return (
    <div className="w-full flex justify-center">
      <button
        className="bg-white w-full max-w-xs py-2 rounded-md text-center font-semibold flex items-center justify-center text-sm md:text-base lg:text-lg"
        onClick={() => setField(text)}
      >
        {text}
        <span className={`ml-2 font-extrabold ${className}`}>+</span>
      </button>
    </div>
  );
}

export default Field;
