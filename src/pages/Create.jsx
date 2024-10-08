import React, { useState } from "react";
import Field from "../components/Field";
import FormField from "../components/FormField";
import FormBox from "../components/FormBox";
import { useForm } from "react-hook-form";

function Create() {
  const [field, setField] = useState("");
  const { register, handleSubmit, reset } = useForm();
  const [formName, setFormName] = useState("");

  const inputtypes = [
    {
      name: "Input",
      type: "input",
      attributes: [
        {
          name: "label",
          type: "text",
          placeholder: "Enter label of this field",
          required: true,
        },
        {
          name: "type",
          type: "text",
          placeholder: "Enter type of this field",
          required: true,
        },
        {
          name: "placeholder",
          type: "text",
          placeholder: "Enter placeholder of this field",
          required: true,
        },
        { name: "required", type: "checkbox", required: true },
        {
          name: "Min",
          type: "number",
          placeholder: "Enter minimum value of this field",
        },
        {
          name: "Max",
          type: "number",
          placeholder: "Enter maximum value of this field",
        },
      ],
    },
    {
      name: "TextArea",
      type: "textarea",
      attributes: [
        {
          name: "name",
          type: "text",
          placeholder: "Enter name of this field",
          required: true,
        },
        {
          name: "placeholder",
          type: "text",
          placeholder: "Enter placeholder of this field",
          required: true,
        },
        {
          name: "required",
          type: "checkbox",
          placeholder: "Enter this field is required or not",
          required: true,
        },
        {
          name: "rows",
          type: "number",
          placeholder: "Enter number of rows in this field",
          required: true,
        },
        {
          name: "cols",
          type: "number",
          placeholder: "Enter number of cols in this field",
          required: true,
        },
      ],
    },
    {
      name: "Select",
      type: "select",
      attributes: [
        {
          name: "name",
          placeholder: "Enter name of this field",
          required: true,
        },
        { name: "required", type: "checkbox" },
      ],
    },
    {
      name: "Checkbox",
      type: "input",
      attributes: [
        {
          name: "label",
          type: "text",
          placeholder: "Enter the name of the label",
          required: true,
        },
        {
          name: "type",
          type: "text",
          default: "checkbox",
          required: true,
          readOnly: true,
        },
      ],
    },
    {
      name: "Radio",
      type: "input",
      attributes: [
        {
          name: "label",
          type: "text",
          placeholder: "Enter the name of the label",
          required: true,
        },
        {
          name: "type",
          type: "text",
          default: "radio",
          required: true,
          readOnly: true,
        },
      ],
    },
  ];

  const addFormName = (data) => {
    setFormName(data.formName);
    reset();
  };

  return (
    <div className="h-full w-full bg-aqua pt-4 flex flex-col items-center gap-4 px-6 overflow-hidden">
      <div className="flex flex-wrap justify-center gap-8 relative w-full">
        {inputtypes?.map((item, idx) => (
          <div key={idx} className="flex flex-col gap-4 w-full sm:w-auto">
            <Field text={item.name} setField={setField} />
            {field === item.name && (
              <div className="absolute top-16 z-10 w-full sm:w-auto">
                <FormField
                  attributes={item.attributes}
                  fieldName={item.name}
                  setField={setField}
                  type={item.type}
                />
              </div>
            )}
          </div>
        ))}
      </div>

      <div
        className="w-full flex flex-col items-center gap-12 mt-8 bg-aqua"
        style={{ height: "calc(100vh - 180px)" }}
      >
        <form
          className="flex flex-col items-center gap-3 mb-4 w-full sm:w-auto"
          onSubmit={handleSubmit(addFormName)}
        >
          <label className="text-gray-700 font-semibold">Form Name</label>
          <input
            type="text"
            placeholder="Enter form name"
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-auto"
            {...register("formName", {
              required: true,
            })}
          />
          <button
            type="submit"
            className="mt-2 hover:bg-transparent hover:border-2 hover:border-orange-500 hover:bg-white hover:text-orange-500 bg-orange-500 px-4 text-white font-semibold py-2 rounded-md"
          >
            Submit
          </button>
        </form>

        <FormBox formName={formName} />
      </div>
    </div>
  );
}

export default Create;
