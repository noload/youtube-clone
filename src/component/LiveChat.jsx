import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import store from "../utils/store";
import { generateRandomName, getRandomMessage } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const [liveMsg, setLiveMsg] = useState("");
  useEffect(() => {
    const polling = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: getRandomMessage(10) + "🚀🚀",
        })
      );
    }, 1500);

    return () => {
      clearInterval(polling);
    };
  }, []);
  const chatMessageList = useSelector((store) => store.chat.messages);

  return (
    <>
      <div className="ml-2 w-full h-[400px] p-2 border bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        <div>
          {chatMessageList.map((m, index) => {
            return (
              <ChatMessage key={index} name={m.name} message={m.message} />
            );
          })}
        </div>
      </div>
      <form
        className="w-full flex p-2 ml-2 border border-black"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Vaibhav Kamble",
              message: liveMsg,
            })
          );
          setLiveMsg("");
        }}
      >
        <input
          type="text"
          placeholder="Say Something..."
          value={liveMsg}
          className="w-9/12 h-[35px] border-2 border-gray-400 outline-none border-r-0 hover:border-blue-300 hover:border-2"
          onChange={(e) => {
            setLiveMsg(e.target.value);
          }}
        />
        <button className="w-3/12 py-1 h-[35px] bg-gray-300 transition ease-in-out duration-500 hover:bg-gray-500 border-2 border-l-0 border-gray-400">
          send
        </button>
      </form>
    </>
  );
};

export default LiveChat;
