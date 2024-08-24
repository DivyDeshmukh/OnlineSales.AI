import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { addFormField } from "../features/FormSlice";

function FormField({ attributes, fieldName, type, setField }) {
  const { register: registerMainForm, handleSubmit: handleSubmitMainForm } =
    useForm();
  const {
    register: registerOptionForm,
    handleSubmit: handleSubmitOptionForm,
    reset: resetOptionForm,
  } = useForm();
  const dispatch = useDispatch();
  const form = useSelector((state) => state.formsData.form);

  const [options, setOptions] = useState([]);
  const [optionsForm, setShowOptionForm] = useState(false);

  const addField = function (data) {
    if (fieldName === "Select") {
      if (options.length !== 0) {
        data.options = options;
      } else {
        alert("Please add some options first!..");
      }
    }
    data.element = type;

    const updateForms = [...form.fields, data];
    setField(false);
    dispatch(addFormField(updateForms));
  };

  const addOption = function (data) {
    setOptions((prev) => [...prev, data.option]);
    resetOptionForm();
    setShowOptionForm(false);
  };

  useEffect(() => {
    console.log(form);
  }, [form]);

  return (
    <div className="relative z-10 p-4">
      <form
        onSubmit={handleSubmitMainForm(addField)}
        className="bg-white p-6 rounded-md shadow-lg max-w-md mx-auto"
      >
        {attributes?.map((item, idx) => (
          <div
            key={idx}
            className={`mb-4 ${
              item.type === "checkbox" ? "flex items-center" : ""
            }`}
          >
            <label
              className={`${
                item.type === "checkbox" || item.type === "radio"
                  ? "mr-2"
                  : "mb-2 block"
              } text-gray-700 font-semibold`}
            >
              {item.name}
            </label>
            <input
              type={item.type}
              placeholder={item.placeholder}
              className={`${
                item.type === "checkbox" ? "" : "w-full"
              } px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
              {...registerMainForm(item.name, {
                required: item.required,
              })}
              readOnly={item?.readOnly}
              value={item?.default}
            />
          </div>
        ))}

        {fieldName === "Select" && (
          <div className="mb-4">
            <button
              type="button"
              onClick={() => setShowOptionForm(true)}
              className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 focus:outline-none"
            >
              Add Option
            </button>
          </div>
        )}

        {options.length > 0 ? (
          <div>
            <h1 className="text-orange-400 mb-2 font-semibold">Options</h1>
            <ul className="flex flex-col gap-2">
              {options.map((option, idx) => (
                <li
                  key={idx}
                  className="text-gray-700 font-medium py-2 px-4 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors duration-200"
                >
                  {option}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          fieldName === "Select" && (
            <h1 className="text-orange-400">No Options Available</h1>
          )
        )}

        <div className="flex flex-col sm:flex-row justify-between mt-6">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
          >
            Save
          </button>
          <button
            type="button"
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400 focus:outline-none mt-2 sm:mt-0 sm:ml-2"
            onClick={() => setField(false)}
          >
            Cancel
          </button>
        </div>
      </form>
      {optionsForm && (
        <form
          onSubmit={handleSubmitOptionForm(addOption)}
          className="absolute left-0 top-full mt-4 p-4 bg-white shadow-lg rounded-md w-full sm:w-auto sm:left-[100%] sm:top-1/2 sm:transform sm:-translate-y-1/2 sm:ml-4 flex flex-col sm:flex-row items-center space-y-2 sm:space-x-2 sm:space-y-0"
        >
          <input
            type="text"
            placeholder="Enter an option"
            className="px-3 py-2 border border-orange-500 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            {...registerOptionForm("option", { required: true })}
          />
          <button
            type="submit"
            className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 focus:outline-none"
          >
            Add
          </button>
        </form>
      )}
    </div>
  );
}

export default FormField;
