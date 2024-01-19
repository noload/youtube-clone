import React, { useEffect, useState } from "react";
import { mostPopularYoutubeApi } from "./constant";

const useVedios = (category) => {
  const [videos, setVideo] = useState([]);

  console.log(category);
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(mostPopularYoutubeApi);
    const json = await data.json();
    setVideo(json.items);
  };

  return [videos, setVideo];
};

export default useVedios;
