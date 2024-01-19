import React from "react";
import Comment from "./Comment";

const commentsData = [
  {
    name: "vaibhav kamble",
    text: "hello what are you doing",
    replies: [
      {
        name: "vaibhav kamble",
        text: "hello what are you doing",
        replies: [
          {
            name: "vaibhav kamble",
            text: "hello what are you doing",
            replies: [
              {
                name: "vaibhav kamble",
                text: "hello what are you doing",
                replies: [],
              },
            ],
          },
          {
            name: "vaibhav kamble",
            text: "hello what are you doing",
            replies: [],
          },
        ],
      },
      {
        name: "vaibhav kamble",
        text: "hello what are you doing",
        replies: [
          {
            name: "vaibhav kamble",
            text: "hello what are you doing",
            replies: [
              {
                name: "vaibhav kamble",
                text: "hello what are you doing",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "vaibhav kamble",
    text: "hello what are you doing",
    replies: [],
  },
  {
    name: "vaibhav kamble",
    text: "hello what are you doing",
    replies: [
      {
        name: "vaibhav kamble",
        text: "hello what are you doing",
        replies: [],
      },
      {
        name: "vaibhav kamble",
        text: "hello what are you doing",
        replies: [],
      },
    ],
  },
  {
    name: "vaibhav kamble",
    text: "hello what are you doing",
    replies: [
      {
        name: "vaibhav kamble",
        text: "hello what are you doing",
        replies: [],
      },
      {
        name: "vaibhav kamble",
        text: "hello what are you doing",
        replies: [],
      },
      {
        name: "vaibhav kamble",
        text: "hello what are you doing",
        replies: [
          {
            name: "vaibhav kamble",
            text: "hello what are you doing",
            replies: [],
          },
          {
            name: "vaibhav kamble",
            text: "hello what are you doing",
            replies: [],
          },
        ],
      },
    ],
  },
];

const CommentLists = ({ comments }) => {
  return comments.map((comment, index) => {
    return (
      <div>
        <Comment key={index} data={comment} />
        <div className="pl-5 ml-5 border border-l-black">
          <CommentLists comments={comment.replies} />
        </div>
      </div>
    );
  });
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments</h1>
      <CommentLists comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
