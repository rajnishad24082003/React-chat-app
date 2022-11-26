import React from "react";
import "../../assets/css/chatsection.css";
function Sendersec() {
  return (
    <>
      <div className="chat-message-left pb-4">
        <div>
          <img
            src="https://bootdey.com/img/Content/avatar/avatar3.png"
            className="rounded-circle mr-1"
            alt="Sharon Lessman"
            width="40"
            height="40"
          />
          <div className="text-muted small text-nowrap mt-2">2:34 am</div>
        </div>
        <div className="flex-shrink-1 bg-light rounded py-2 px-3 ml-3">
          <div className="font-weight-bold mb-1">
            <h5>other person</h5>
          </div>
          <p>
            Sit meis deleniti eu, pri vidit meliore docendi ut, an eum erat
            animal commodo.
          </p>
        </div>
      </div>
    </>
  );
}

export default Sendersec;
