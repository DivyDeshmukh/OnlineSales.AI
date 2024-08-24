import React from "react";
import { useDispatch } from "react-redux";
import { updateForm } from "../features/FormSlice";

function FormElements({ name, fields, readOnly = false }) {
  const dispatch = useDispatch();

  const onRemoveField = (idx) => {
    const formFields = fields?.filter((_, index) => index !== idx);
    dispatch(
      updateForm({
        name: name,
        fields: formFields,
      })
    );
  };

  return (
    <div>
      {fields?.map((field, idx) => (
        <div className="flex flex-col sm:flex-row items-start mb-4" key={idx}>
          <div className="flex-1">
            <label
              className={`${
                field.type === "checkbox" || field.type === "radio"
                  ? "mr-2"
                  : "mb-2 block"
              } text-gray-700 font-semibold`}
            >
              {field.label || field.name}
            </label>
            {field.element === "input" && (
              <input
                type={field.type}
                placeholder={field.placeholder}
                className={`${
                  field.type === "checkbox" || field.type === "radio"
                    ? "mr-2"
                    : "w-full"
                } px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
            )}
            {field.element === "select" && (
              <select
                required={field.required}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {field.options?.map((option, idx) => (
                  <option key={idx}>{option}</option>
                ))}
              </select>
            )}
            {field.element === "textarea" && (
              <textarea
                required={field.required}
                placeholder={field.placeholder}
                rows={field.rows || 3}
                cols={field.cols || 20}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              />
            )}
          </div>
          {!readOnly && (
            <button
              type="button"
              onClick={() => onRemoveField(idx)}
              className="mt-2 sm:mt-0 sm:ml-2 hover:bg-transparent hover:border-2 hover:border-orange-500 hover:bg-white hover:text-orange-500 bg-orange-500 px-4 text-white font-semibold py-2 rounded-md"
            >
              Remove
            </button>
          )}
        </div>
      ))}
    </div>
  );
}

export default FormElements;
