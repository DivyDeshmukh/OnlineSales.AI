import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { addForms } from "../features/FormSlice";
import { useDispatch } from "react-redux";

function Dashboard() {
  const [formsName, setFormsName] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const formsData = localStorage.getItem("formsData");
    if (formsData) {
      console.log("running");
      const parseFormsData = JSON.parse(formsData);
      dispatch(addForms(parseFormsData));
      const names = parseFormsData.map((form) => form.name);
      setFormsName(names);
    }
  }, []);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Dashboard
      </h1>
      {formsName.length > 0 ? (
        <ul className="space-y-4">
          {formsName.map((name, idx) => (
            <li
              key={idx}
              className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md hover:bg-gray-100 transition-colors"
            >
              <span className="text-lg font-semibold text-gray-700">
                {name}
              </span>
              <Link
                to={`/form/${name}`}
                className="text-blue-500 hover:text-blue-600 transition-colors"
              >
                View Form
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <h1 className="text-center text-gray-500 font-semibold text-xl">
          No forms available
        </h1>
      )}
    </div>
  );
}

export default Dashboard;
