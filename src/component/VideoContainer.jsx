import React, { useEffect, useState } from "react";
import { mostPopularYoutubeApi } from "../utils/constant";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import useVedios from "../utils/UseVedios";

const VideoContainer = () => {
  const [videos, setVideo] = useVedios("hello");
  return (
    <div className="flex flex-wrap">
      {videos.map((vedio) => {
        return (
          <Link className=" w-1/4" to={"/watch?v=" + vedio.id}>
            <VideoCard vedioInfo={vedio} />
          </Link>
        );
      })}
    </div>
  );
};

export default VideoContainer;
