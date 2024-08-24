import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { updateForm } from "../features/FormSlice";
import FormBox from "../components/FormBox";
import FormElements from "../components/FormElements";

function SeeForm() {
  const { name } = useParams();
  const formsData = useSelector((state) => state.formsData.forms);
  const [formData, setFormData] = useState(null);

  useEffect(() => {
    const getForm = formsData?.filter((form) => form.name === name)[0];
    console.log(getForm, name);
    setFormData(getForm);
  }, []);

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  return (
    <div className="h-auto min-h-[200px] bg-white w-full max-w-[450px] rounded-lg shadow-md p-6 mx-auto max-h-[600px] overflow-y-auto mt-16">
      <h1 className="text-2xl text-center font-[Georgia] font-bold pt-4 text-red-600 mb-4">
        {name}
      </h1>

      <FormElements fields={formData?.fields} name={name} readOnly={true} />
    </div>
  );
}

export default SeeForm;
