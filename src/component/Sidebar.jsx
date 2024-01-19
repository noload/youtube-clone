import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  return !isMenuOpen ? null : (
    <div className=" flex flex-col p-5 pt-10 h-screen  transition-all ease-linear duration-200 shadow-lg w-48">
      <ul className="flex w-full flex-col py-2 px-4 gap-1 text-gray-600 font-semibold">
        <li className="transition hover:scale-105 ease-in-out">
          <Link to="/">Home</Link>
        </li>
        <li className="transition hover:scale-105 ease-in-out">
          <Link to="/">About</Link>
        </li>
        <li>Service</li>
        <li>Contact</li>
      </ul>
      <h1 className="text-lg font-bold">Subscription</h1>
      <ul className="flex flex-col w-full py-2 px-4 gap-1 text-gray-600 font-semibold">
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>

      <h1 className="text-lg font-bold">Watch Later</h1>
      <ul className="flex flex-col w-full py-2 px-4 gap-1 text-gray-600 font-semibold">
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
      <h1 className="text-lg font-bold">Explore</h1>
      <ul className="flex flex-col py-2 px-4 gap-1 text-gray-600 font-semibold">
        <li>Tranding</li>
        <li>Shopping</li>
        <li>Live</li>
        <li>New</li>
      </ul>

      <ul className="flex flex-col py-2 text-lg gap-1 font-bold">
        <li>Setting</li>
        <li>Report History</li>
        <li>Help</li>
        <li>Feedback</li>
      </ul>
    </div>
  );
};

export default Sidebar;
