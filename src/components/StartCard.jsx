import React from "react";

const StartCard = ({ title, value, color = "blue" }) => {

  return (
    <div
      className={`bg-indigo-500/20 border border-indigo-500/60 p-4 rounded-medium `}
    >
      <h3
        className={`text-4xl font-bold ${color === "blue" ? "text-blue-500" : color === "gray" ? "text-gray-500" : "text-green-500"}`}
      >
        {value}
      </h3>
      <p className="text-base font-semibold">{title}</p>
    </div>
  );
};

export default StartCard;
