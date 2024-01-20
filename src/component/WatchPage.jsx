import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { CloseMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [param] = useSearchParams();
  const vId = param.get("v");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(CloseMenu());
  }, []);

  return (
    <>
      <div className="flex flex-col w-screen">
        <div className="m-5 flex w-full">
          <div className="">
            <iframe
              width="800"
              height="400"
              src={"https://www.youtube.com/embed/" + vId}
              FrameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <div className="w-[500px]">
            <LiveChat />
          </div>
        </div>
        <CommentsContainer />
      </div>
    </>
  );
};

export default WatchPage;
