import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  return (
    <div className="h-screen  m-4 overflow-x-auto">
      <ButtonList />
      <VideoContainer />
    </div>
  );
};
 
export default MainContainer;
