import React, { useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import store from "../utils/store";
import { generateRandomName, getRandomMessage } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const polling = setInterval(() => {
      console.log("ai polling");
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: getRandomMessage(10) + "🚀🚀",
        })
      );
    }, 500);

    return () => {
      clearInterval(polling);
    };
  }, []);
  const chatMessageList = useSelector((store) => store.chat.messages);

  return (
    <div className="ml-2 w-full h-[400px] p-2 border bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
      {chatMessageList.map((m, index) => {
        return <ChatMessage key={index} name={m.name} message={m.message} />;
      })}
    </div>
  );
};

export default LiveChat;
