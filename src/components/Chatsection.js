import React, { useState } from "react";
import "../assets/css/chatsection.css";
import Receiversec from "./chatsection/Receiversec";
import Sendersec from "./chatsection/Sendersec";
import Modal from "../components/Modal";
function Chatsection() {
  let [inputdata, setInputdata] = useState("");
  let inputtextfun = (e) => {
    e.prevantDefault();
    setInputdata(e.target.value);
  };
  return (
    <>
      <div className="chatsectionmaindiv">
        <div className="chatsectionseconddiv">
          <div className="headerofchat">
            <a
              href="#"
              className="list-group-item list-group-item-action border-0"
            >
              <div className="d-flex align-items-start">
                <img
                  src="https://bootdey.com/img/Content/avatar/avatar5.png"
                  className="rounded-circle mr-1"
                  alt="Vanessa Tucker"
                  width="50"
                  height="50"
                />
                <div className="flex-grow-1 ml-3">
                  <h5>other person</h5>
                  <div className="small">
                    <span className="fas fa-circle chat-online"></span>{" "}
                    <h6>status</h6>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="chatsfromboth mt-3">
            <Sendersec></Sendersec>
            <Receiversec></Receiversec>
            <Sendersec></Sendersec>
            <Receiversec></Receiversec>
            <Sendersec></Sendersec>
            <Receiversec></Receiversec>
          </div>
          <div className="flex-grow-0 py-3 px-4 border-top">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Type your message"
                onChange={inputtextfun}
                value={inputdata}
              />
              <button className="btn sendbtn">Send</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Chatsection;
