import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import TimeAgo from "timeago-react";
import "../../assets/css/chatsection.css";
import userimg from "../../assets/img/features-2.png";
import { useHover, usePresence } from "../../misc/custom-hooks";

function Sendersec({ valData, uid, key }) {
  let [selfRef, isHoverd] = useHover();
  let presence = usePresence(uid);
  let [online_offline, setonline_offline] = useState(presence);
  useEffect(() => {
    if (presence) {
      setonline_offline(presence.state);
    }
  }, [presence]);
  let { val } = valData;
  let { AudioData } = valData;
  let { inputMessage } = valData;
  if (inputMessage) {
    return (
      <div className="chat-message-left pb-4" key={valData.createdTime}>
        <div>
          <img
            src={
              valData.author.profileAvatar
                ? valData.author.profileAvatar
                : userimg
            }
            className="rounded-circle mr-1"
            alt=""
            width="40"
            height="40"
          />
          <div className="text-muted small text-nowrap mt-2">
            <span
              className={`bi bi-circle-fill chat-${online_offline} pe-1`}
            ></span>
            <TimeAgo datetime={new Date(valData.createdTime)}></TimeAgo>
          </div>
        </div>
        <div
          className={` flex-shrink-1 bg-light rounded py-2 px-3 ml-3 ${
            isHoverd ? "bg-dark bg-opacity-10" : ""
          }`}
          ref={selfRef}
        >
          <div className="font-weight-bold mb-1" style={{ width: "100%" }}>
            <h5>{valData.author.name}</h5>
          </div>
          <div>
            <div className="inputMessageSize messagewidth">
              {valData.inputMessage}
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (AudioData) {
    return (
      <div className="chat-message-left pb-4" key={valData.createdTime}>
        <div>
          <img
            src={
              valData.author.profileAvatar
                ? valData.author.profileAvatar
                : userimg
            }
            className="rounded-circle mr-1"
            alt=""
            width="40"
            height="40"
          />
          <div className="text-muted small text-nowrap mt-2">
            <span
              className={`bi bi-circle-fill chat-${online_offline} pe-1`}
            ></span>
            <TimeAgo datetime={new Date(valData.createdTime)}></TimeAgo>
          </div>
        </div>
        <div
          className={` flex-shrink-1 bg-light rounded py-2 px-3 ml-3 ${
            isHoverd ? "bg-dark bg-opacity-10" : ""
          }`}
          ref={selfRef}
        >
          <div className="font-weight-bold mb-1" style={{ width: "100%" }}>
            <h5>{valData.author.name}</h5>
          </div>
          <div>
            <audio controls className="messagewidth">
              <source src={AudioData} type="audio/wav" />
            </audio>
          </div>
        </div>
      </div>
    );
  }
  if (val) {
    return (
      <div className="chat-message-left pb-4" key={valData.createdTime}>
        <div>
          <img
            src={
              valData.author.profileAvatar
                ? valData.author.profileAvatar
                : userimg
            }
            className="rounded-circle mr-1"
            alt=""
            width="40"
            height="40"
          />
          <div className="text-muted small text-nowrap mt-2">
            <span
              className={`bi bi-circle-fill chat-${online_offline} pe-1`}
            ></span>
            <TimeAgo datetime={new Date(valData.createdTime)}></TimeAgo>
          </div>
        </div>
        <div
          className={` flex-shrink-1 bg-light rounded py-2 px-3 ml-3 ${
            isHoverd ? "bg-dark bg-opacity-10" : ""
          }`}
          ref={selfRef}
        >
          <div className="font-weight-bold mb-1" style={{ width: "100%" }}>
            <h5>{valData.author.name}</h5>
          </div>
          <div>
            {valData.val.map((currVal, numb) => {
              return (
                <div className="imgDiv" key={currVal.createdTime}>
                  <img
                    src={currVal.url}
                    alt={currVal.name}
                    className="sendimageFile "
                  />
                  <a href={currVal.url}>
                    <i className="bi bi-cloud-download"></i>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Sendersec;
