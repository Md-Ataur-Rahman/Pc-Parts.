import React, { useEffect, useState } from "react";
import Tool from "./Tool";

const Tools = () => {
  const [tools, setTools] = useState([]);

  useEffect(() => {
    fetch("tools.json")
      .then((res) => res.json())
      .then((data) => setTools(data));
  }, []);
  return (
    <div>
      <h1 className="py-9 text-center text-5xl font-bold">Pc Tools</h1>
      <div className="w-5/6 mx-auto py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {tools.map((tool, idx) => (
          <Tool key={idx} tool={tool}></Tool>
        ))}
      </div>
    </div>
  );
};

export default Tools;
