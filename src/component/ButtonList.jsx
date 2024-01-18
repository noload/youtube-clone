import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

const ButtonList = () => {
  let btnList = [
    "Games",
    "Live",
    "Prodcast",

    "Documentory",
    "Games",
    "Live",
    "Prodcast",

    "Documentory",

    "Games",
    "Live",
  ];
  let count = 0;

  return (
    <div className="flex ">
      <div className="flex overscroll-x-auto">
        <button
          className="px-5 m-1 py-1.5 bg-gray-500 rounded-lg transition-all ease-in-out hover:bg-gray-300"
        >
          All
        </button>
        {btnList.map((btn) => {
          return <Button name={btn} key={count++} />;
        })}
      </div>
    </div>
  );
};

export default ButtonList;
