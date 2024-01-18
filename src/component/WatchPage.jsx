import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { CloseMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";

const WatchPage = () => {
  const [param] = useSearchParams();
  const vId = param.get("v");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(CloseMenu());
  }, []);

  return (
    <div className="p-10 m-5">
      <iframe
        width="750"
        height="380"
        src={"https://www.youtube.com/embed/" + vId}
        FrameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default WatchPage;
