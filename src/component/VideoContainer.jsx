import React, { useEffect, useState } from "react";
import { mostPopularYoutubeApi } from "../utils/constant";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideo] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(mostPopularYoutubeApi);
    const json = await data.json();
    setVideo(json.items);
  };
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
