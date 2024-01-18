import React from "react";

const VideoCard = ({ vedioInfo }) => {
  const { snippet } = vedioInfo;
  const { publishedAt, channelTitle, thumbnails } = snippet;

  return (
    <div className="p-5  w-full rounded-lg shadow-lg">
      <img className="w-full rounded-lg" src={thumbnails.high.url} />
      <ul>
        <li className="font-bold">{channelTitle}</li>
        <li>{publishedAt}</li>
      </ul>
    </div>
  );
};

export default VideoCard;
