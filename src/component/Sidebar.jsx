import React from "react";

const Sidebar = () => {
  return (
    <div className="p-5 pt-10 shadow-lg w-48">
      <h1 className="text-lg font-bold">Subscription</h1>
      <ul className="flex flex-col py-2 px-4 gap-1 text-gray-600 font-semibold">
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>

      <h1 className="text-lg font-bold">Watch Later</h1>
      <ul className="flex flex-col py-2 px-4 gap-1 text-gray-600 font-semibold">
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
