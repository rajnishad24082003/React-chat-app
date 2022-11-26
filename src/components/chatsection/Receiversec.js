import React from "react";
import "../../assets/css/chatsection.css";
function Receiversec() {
  return (
    <>
      <div className="chat-message-right mb-4">
        <div>
          <img
            src="https://bootdey.com/img/Content/avatar/avatar1.png"
            className="rounded-circle mr-1"
            alt="Chris Wood"
            width="40"
            height="40"
          />
          <div className="text-muted small text-nowrap mt-2">2:35 am</div>
        </div>
        <div className="flex-shrink-1 bg-light rounded py-2 px-3 mr-3">
          <div className="font-weight-bold mb-1">
            <h5>you</h5>
          </div>
          <p>Cum ea graeci tractatos.</p>
        </div>
      </div>
    </>
  );
}

export default Receiversec;
