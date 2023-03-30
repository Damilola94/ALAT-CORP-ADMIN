import React, { useState } from "react";
import Chat from "./Chat";
import Feed from "./Feed";

const ChatContainer = () => {
  return (
    <>
      <div className="h-fit mb-4">
        <div className="p-2 mx-6 mt-6 bg-white rounded-lg border border-gray-200">
          <div className="p-1 flex">
            <Chat />
            <Feed />
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatContainer;
