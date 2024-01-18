import React from "react";

const Head = () => {
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          className="h-8"
          alt="menu"
          src="https://static.vecteezy.com/system/resources/previews/021/190/402/original/hamburger-menu-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg"
        />
        <img
          className="h-8 mx-2"
          alt="logo"
          src="https://tse3.mm.bing.net/th?id=OIP._0mJeL1mx94Kw7G2TkLu2QHaEK&pid=Api&P=0&h=180"
        />
      </div>

      <div className="col-span-10 text-center">
        <input
          placeholder="Search here"
          className="w-1/2 border focus:outline-none border-gray-400 p-2 focus:border-blue-400 rounded-l-3xl"
          type="text"
        />
        <button className="border bg-gray-100 rounded-r-full border-gray-400 p-2  w-1/12 hover:bg-gray-300">
          🔍
        </button>
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
