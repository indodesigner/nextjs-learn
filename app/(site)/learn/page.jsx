"use client";
import React, { useState } from "react";

const Learn = () => {
  //   const data = "i look to you and i see nothing";

  const [data, setData] = useState("");
  const [revData, setRevData] = useState("");

  const reverseSentences = () => {
    const splt = data.split(" ");

    const revLetters = splt.map((word) => {
      const spltl = word.split("");

      const rev = spltl.reverse();

      const joinl = rev.join("");

      return joinl;
    });

    const joinSentence = revLetters.join(" ");
    setRevData(joinSentence);
  };

  console.log(data);

  return (
    <div className="">
      <div className="bg-white rounded-md flex flex-col justify-center items-center p-3 shadow-sm">
        <input
          type="text"
          onChange={(e) => setData(e.target.value)}
          placeholder="Enter any sentence here"
          className="rounded-md h-8 bg-gray-200 px-2 w-[400px] max-w-[500px]"
        />
        <button
          onClick={reverseSentences}
          className="font-medium bg-gray-900 text-white rounded-md mt-3 py-1 max-w-[200px] px-3"
        >
          Reverse
        </button>
        <div className="py-3">
          The letter reversed sentence is: <br />
          <span className="text-lg font-bold">{revData}</span>
        </div>
      </div>
    </div>
  );
};

export default Learn;
