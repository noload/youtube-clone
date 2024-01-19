import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { ToggleMenu } from "../utils/appSlice";
import { Link } from "react-router-dom";
import { searchApi } from "../utils/constant";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(ToggleMenu());
  };

  const getSearchSuggestion = async () => {
    const data = await fetch(searchApi + searchQuery);
    const json = await data.json();
    setSuggestion(json[1]);
  };

  useEffect(() => {
    const time = setTimeout(() => getSearchSuggestion(), 200);

    return () => {
      clearTimeout(time);
    };
  }, [searchQuery]);

  return (
    <div className="grid grid-flow-col p-5  shadow-lg ">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8 cursor-pointer"
          alt="menu"
          src="https://static.vecteezy.com/system/resources/previews/021/190/402/original/hamburger-menu-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg"
        />

        <img
          className="h-8 mx-2 cursor-pointer"
          alt="logo"
          src="https://tse3.mm.bing.net/th?id=OIP._0mJeL1mx94Kw7G2TkLu2QHaEK&pid=Api&P=0&h=180"
        />
      </div>

      <div className="col-span-10 text-center">
        <div>
          <input
            placeholder="Search here"
            className="w-1/2 border focus:outline-none border-gray-400 p-2 focus:border-blue-400 rounded-l-3xl"
            type="text"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
          />
          <button className="border bg-gray-100 rounded-r-full border-gray-400 p-2  w-1/12 hover:bg-gray-300">
            🔍
          </button>
        </div>
        <div className="">
          <ul className=" absolute border border-gray-300  w-[32.5rem] rounded-lg  top-13 left-[26rem] bg-white flex flex-col text-left text-gray-700 gap-2  m-2">
            {suggestion.map((s) => {
              return (
                <li
                  key={s}
                  className="p-3 border-b hover:bg-gray-200 cursor-pointer"
                >
                  🔍 {s}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="col-span-1">
        <img
          className="h-8"
          src="https://static.vecteezy.com/system/resources/thumbnails/000/550/980/small_2x/user_icon_001.jpg"
          alt="user"
        />
      </div>
    </div>
  );
};

export default Head;
