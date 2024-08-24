import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import FormElements from "../components/FormElements";

function SeeForm() {
  const { name } = useParams();
  const formsData = useSelector((state) => state.formsData.forms);
  const [formData, setFormData] = useState(null);

  useEffect(() => {
    const getForm = formsData?.find((form) => form.name === name);
    setFormData(getForm);
  }, [formsData, name]);

  return (
    <div className="h-auto min-h-[200px] bg-white w-full max-w-[450px] mx-auto rounded-lg shadow-md p-4 sm:p-6 mt-8 sm:mt-16 overflow-y-auto">
      <h1 className="text-xl sm:text-2xl text-center font-serif font-bold text-red-600 mb-4">
        {name}
      </h1>
      <FormElements fields={formData?.fields} name={name} readOnly={true} />
    </div>
  );
}

export default SeeForm;
