import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addForms, updateForm } from "../features/FormSlice";
import { useNavigate } from "react-router-dom";
import FormElements from "./FormElements";

function FormBox({ formName, formNameRef }) {
  const formData = useSelector((state) => state.formsData);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const saveForm = () => {
    // saveForm in store as well as in local storage
    // console.log(formName);

    if (formName.length === 0) {
      alert("Please provide form name");
      // formNameRef?.current?.focus();
      return;
    }

    const updatedForms = [
      ...formData.forms,
      {
        name: formName,
        ...formData.form,
      },
    ];
    // console.log(updatedForms);
    dispatch(addForms(updatedForms));
    navigate("/");
  };

  const deleteForm = () => {
    // delete form logic here
    dispatch(updateForm({}));
  };

  const hasFields = formData.form.fields && formData.form.fields.length > 0;

  return (
    <div className="h-auto min-h-[200px] bg-white w-full max-w-[450px] rounded-lg shadow-md p-6 mx-auto max-h-[600px] overflow-y-auto">
      <h1 className="text-2xl text-center font-[Georgia] font-bold pt-4 text-red-600 mb-4">
        {formName || "Add Form Name"}
      </h1>

      <FormElements fields={formData.form.fields} name={formData.form.name} />

      {!hasFields && (
        <h1 className="text-2xl text-center text-red-500 font-semibold">
          No Fields Added
        </h1>
      )}

      {hasFields && (
        <div className="mt-4 flex justify-center">
          <button
            onClick={saveForm}
            className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75"
          >
            Save
          </button>
          <button
            onClick={deleteForm}
            className="px-4 py-2 bg-red-500 text-white font-semibold rounded-md shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-75 ml-2"
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
}

export default FormBox;
