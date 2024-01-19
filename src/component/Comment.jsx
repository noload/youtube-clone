import React from "react";


const Comment = ({ data }) => {
  const { name, text } = data;
  return (
    <div className="flex p-2 m-1 gap-2 bg-gray-300">
      <img
        className="w-12 h-12"
        src="https://pluspng.com/img-png/png-user-icon-circled-user-icon-2240.png"
      ></img>
      <div>
        <p>{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Comment;
