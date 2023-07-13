"use client";
import { useState } from "react";
const names = ["Jishnu", "Savidh", "Abin", "David", "John", "George"];
const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const Test = () => {
  const [name, setName] = useState();
  const [day, setDay] = useState();
  return (
    <div>
      {names.map((data) => (
        <>
          <input
            name="names"
            type="radio"
            id={data}
            value={data}
            className="mx-2"
            onChange={() => setName(data)}
          />
          <label htmlFor={data} className="me-3">
            {data}
          </label>
        </>
      ))}

      <h2 className="text-3xl font-bold my-3"></h2>

      {days.map((data) => (
        <>
          <input
            name="days"
            type="radio"
            id={data}
            value={data}
            className="mx-2"
            onChange={() => setDay(data)}
          />
          <label htmlFor={data} className="me-3">
            {data}
          </label>
        </>
      ))}

      <h2 className="text-3xl font-bold mt-10">
        {name} will be leave on {day}
      </h2>
    </div>
  );
};

export default Test;
