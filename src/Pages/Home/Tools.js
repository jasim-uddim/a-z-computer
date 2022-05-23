import React, { useEffect, useState } from "react";

import Parts from "./Parts";

const Tools = () => {
  const [parts, setParts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5001/service")
      .then((res) => res.json())
      .then((data) => setParts(data));
  }, []);
  return (
    <div className="my-8">
      <h1 className="text-3xl text-center text-secondary">Available parts:</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-5">
        {parts.map((part) => (
          <Parts key={part._id} part={part}></Parts>
        ))}
      </div>
    </div>
  );
};

export default Tools;
