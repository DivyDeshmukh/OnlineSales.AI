import React from "react";
import { useDispatch } from "react-redux";
import { updateForm } from "../features/FormSlice";

function FormElements({ name, fields, readOnly = false }) {
  const dispatch = useDispatch();
  const onRemoveField = (idx) => {
    const formFields = fields?.filter((field, index) => index !== idx);
    dispatch(
      updateForm({
        name: name,
        fields: formFields,
      })
    );
  };

  return (
    <div>
      {fields?.map(
        (field, idx) =>
          field.element === "input" && (
            <div className="flex items-center mb-4" key={idx}>
              <div className="flex-1">
                <label
                  className={`${
                    field.type === "checkbox" || field.type === "radio"
                      ? "mr-2"
                      : "mb-2 block"
                  } text-gray-700 font-semibold`}
                >
                  {field.label}
                </label>
                <input
                  type={field.type}
                  placeholder={field.placeholder}
                  className={`${
                    field.type === "checkbox" || field.type === "radio"
                      ? "mr-2"
                      : "w-full"
                  } px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                />
              </div>
              {!readOnly && (
                <button
                  type="button"
                  onClick={() => onRemoveField(idx)}
                  className="ml-2 hover:bg-transparent hover:border-2 hover:border-orange-500 hover:bg-white hover:text-orange-500 bg-orange-500 px-4 text-white font-semibold py-2 rounded-md mt-8"
                >
                  Remove
                </button>
              )}
            </div>
          )
      )}

      {fields?.map(
        (field, idx) =>
          field.element === "select" && (
            <div className="flex items-center mb-4" key={idx}>
              <div className="flex-1">
                <label className="text-gray-700 font-semibold mb-2 block">
                  {field.name}
                </label>
                <select
                  required={field.required}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {field.options?.map((option, idx) => (
                    <option key={idx}>{option}</option>
                  ))}
                </select>
              </div>
              {!readOnly && (
                <button
                  type="button"
                  onClick={() => onRemoveField(idx)}
                  className="ml-2 hover:bg-transparent hover:border-2 hover:border-orange-500 hover:bg-white hover:text-orange-500 bg-orange-500 px-4 text-white font-semibold py-2 rounded-md"
                >
                  Remove
                </button>
              )}
            </div>
          )
      )}

      {fields?.map(
        (field, idx) =>
          field.element === "textarea" && (
            <div className="flex items-center mb-4" key={idx}>
              <div className="flex-1">
                <label className="text-gray-700 font-semibold mb-2 block">
                  {field.name}
                </label>
                <textarea
                  required={field.required}
                  placeholder={field.placeholder}
                  rows={field.rows}
                  cols={field.cols}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                />
              </div>
              {!readOnly && (
                <button
                  type="button"
                  onClick={() => onRemoveField(idx)}
                  className="ml-2 hover:bg-transparent hover:border-2 hover:border-orange-500 hover:bg-white hover:text-orange-500 bg-orange-500 px-4 text-white font-semibold py-2 rounded-md"
                >
                  Remove
                </button>
              )}
            </div>
          )
      )}
    </div>
  );
}

export default FormElements;
